import { useState, useEffect } from 'react';
import { verifyProof } from '../verifier.js';
import { decompressProof } from '../compression.js';

export const useLeaderboard = () => {
    const [allData, setAllData] = useState({});
    const [summaryList, setSummaryList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                // Ensure room is available
                if (!window.room) return;

                const records = await window.room.collection('player_records_v1').getList();
                
                const grouped = {};

                records.forEach(record => {
                    let allRawProofs = [];
                    if (record.proofs) allRawProofs = allRawProofs.concat(record.proofs);
                    
                    for (let c = 2; c <= 20; c++) {
                        const col = record[`proofs_${c}`];
                        if (col) allRawProofs = allRawProofs.concat(col);
                    }

                    if (allRawProofs.length === 0) return;

                    allRawProofs.forEach((rawProof, index) => {
                         if (rawProof && rawProof.finalScore !== undefined) {
                             // Calculate ticks from compressed data or raw inputs
                             let tickCount = 0;
                             if (rawProof.inputs && Array.isArray(rawProof.inputs)) {
                                 tickCount = rawProof.inputs.length;
                             } else if (rawProof.compressedInputs) {
                                 try {
                                     // Each compressed input is exactly 5 bytes
                                     tickCount = Math.floor(atob(rawProof.compressedInputs).length / 5);
                                 } catch (e) {}
                             }

                             const scoreItem = {
                                 id: `${record.id}_${index}`,
                                 username: record.username,
                                 score: rawProof.finalScore,
                                 proof: rawProof,
                                 tickCount,
                                 verifying: false,
                                 verified_local: false,
                                 timestamp: rawProof.timestamp || 0
                             };
                             
                             if (!grouped[record.username]) {
                                 grouped[record.username] = {
                                     username: record.username,
                                     bestScore: 0,
                                     scores: [],
                                     avatarUrl: `https://images.websim.com/avatar/${record.username}`
                                 };
                             }
                             
                             grouped[record.username].scores.push(scoreItem);
                             if (scoreItem.score > grouped[record.username].bestScore) {
                                 grouped[record.username].bestScore = scoreItem.score;
                             }
                         }
                    });
                });

                // Sort scores for each user and create summary
                const summary = Object.values(grouped).map(user => {
                    user.scores.sort((a, b) => b.score - a.score);
                    return user;
                }).sort((a, b) => b.bestScore - a.bestScore);
                
                setAllData(grouped);
                setSummaryList(summary);
            } catch (e) {
                console.error("Failed to fetch leaderboard", e);
            } finally {
                setLoading(false);
            }
        };
        fetchScores();
    }, []);

    const verifyScore = async (scoreId, username) => {
        const userGroup = allData[username];
        if (!userGroup) return;

        const scoreIndex = userGroup.scores.findIndex(s => s.id === scoreId);
        if (scoreIndex === -1) return;

        // Optimistic update: set state to verifying
        setAllData(prev => {
            const u = { ...prev[username] };
            u.scores = [...u.scores];
            u.scores[scoreIndex] = { ...u.scores[scoreIndex], verifying: true };
            return { ...prev, [username]: u };
        });

        try {
            const record = userGroup.scores[scoreIndex];
            const fullProof = decompressProof(record.proof);
            const result = await verifyProof(fullProof, null, username);
            
            if (!result.valid) alert(`Verification Failed: ${result.reason}`);

            setAllData(prev => {
                const u = { ...prev[username] };
                u.scores = [...u.scores];
                u.scores[scoreIndex] = { 
                    ...u.scores[scoreIndex], 
                    verifying: false, 
                    verified_local: result.valid 
                };
                return { ...prev, [username]: u };
            });
        } catch (e) {
            console.error(e);
            setAllData(prev => {
                const u = { ...prev[username] };
                u.scores = [...u.scores];
                u.scores[scoreIndex] = { ...u.scores[scoreIndex], verifying: false };
                return { ...prev, [username]: u };
            });
        }
    };

    return { allData, summaryList, loading, verifyScore };
};