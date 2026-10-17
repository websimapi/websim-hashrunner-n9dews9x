import { compressProof } from './compression.js';

export const submitScoreToLeaderboard = async (finalProof) => {
    if (!finalProof) throw new Error("No proof to submit");
    
    const currentUser = await window.websim.getCurrentUser();
    const username = currentUser.username;
    
    // Compress the proof to save space
    const compressed = compressProof(finalProof);

    // Check if user already has a record
    const records = await window.room.collection('player_records_v1')
        .filter({ username: username })
        .getList();
    
    if (records.length > 0) {
        const record = records[0];
        
        // Dynamic Column Allocation Logic
        // Websim has a ~250KB limit per field/record. We split proofs across multiple columns.
        
        let targetCol = 'proofs';
        let currentData = record.proofs || [];
        let colIndex = 1;

        while (true) {
            const colName = colIndex === 1 ? 'proofs' : `proofs_${colIndex}`;
            const colData = record[colName];

            if (!colData) {
                // Found a new empty column slot
                targetCol = colName;
                currentData = [];
                break;
            }

            // Check size of existing column (Approximation)
            const size = JSON.stringify(colData).length;
            
            // If column is < 200KB, we can likely append to it. 
            // (Leaving 50KB buffer for the new proof and overhead)
            if (size < 200000) { 
                targetCol = colName;
                currentData = colData;
                break;
            }

            // Column is full, check next one
            colIndex++;
            // Safety break to prevent infinite loops (though unlikely to reach 100 columns)
            if (colIndex > 20) break;
        }

        const updatedProofs = [...currentData, compressed];
        
        await window.room.collection('player_records_v1').update(record.id, {
            [targetCol]: updatedProofs
        });
    } else {
        // First time user
        await window.room.collection('player_records_v1').create({
            proofs: [compressed]
        });
    }
};