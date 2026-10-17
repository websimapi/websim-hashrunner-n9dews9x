import { GameEngine, GAME_CONSTANTS } from './engine.js';
import { SeededRNG } from './rng.js';
import { sha256, serializeStateForHashing, getDifficulty } from './crypto.js';

/**
 * Replays a game proof to verify its validity.
 * @param {Object} proof - The proof object containing seed, inputs, and hashes.
 * @param {Function} onProgress - Callback for progress updates (0-1).
 * @returns {Promise<Object>} - { valid: boolean, reason: string, score: number }
 */
export async function verifyProof(proof, onProgress, claimedUsername = null) {
    // 0. Identity Check (Prevent Replay Attacks)
    if (claimedUsername) {
        const expectedPrefix = claimedUsername + "_";
        if (!proof.seed.startsWith(expectedPrefix)) {
            return { valid: false, reason: `Identity Mismatch: Proof seed bound to different user` };
        }
    }

    // 1. Time Manipulation Check (Prevent Slow-Motion)
    if (proof.startTimestamp && proof.endTimestamp) {
        const totalTicks = proof.inputs.length;
        const minExpectedDuration = totalTicks * (1000 / 60); // 60 FPS
        const actualDuration = proof.endTimestamp - proof.startTimestamp;
        
        // Allow up to 4x slowness (lag/low FPS) but flag extreme slow-motion
        if (actualDuration > minExpectedDuration * 4) {
            return { valid: false, reason: `Time Dilation Detected: Game played at suspicious speed` };
        }
    }

    const engine = new GameEngine(proof.seed);
    let previousHash = proof.initialHash; // Should be hash of seed
    
    // Compute Code Hash for integrity check
    const codeHash = await sha256(GameEngine.toString() + SeededRNG.toString());
    
    // Verify Code Hash matches proof (if present)
    if (proof.codeHash && proof.codeHash !== codeHash) {
        return { valid: false, reason: "Code Integrity Check Failed: Game code has been modified." };
    }

    // Safety check on lengths
    if (!proof.inputs || !proof.inputs.length) {
        return { valid: false, reason: "No inputs provided" };
    }

    const totalTicks = proof.inputs.length;

    for (let i = 0; i < totalTicks; i++) {
        const record = proof.inputs[i];
        
        // 1. Run Logic
        const state = engine.tick(record.input);
        
        // 2. Check Difficulty Requirement
        const expectedDiff = getDifficulty(state);
        if ((record.difficulty || 0) < expectedDiff) {
             return { valid: false, reason: `Difficulty too low at tick ${i}. Suspicious behavior detected.` };
        }

        // 3. Reconstruct Commitment Chain (The "Fast Chain")
        // Previous logic: hash(prevHash + code + serialized)
        const serialized = serializeStateForHashing(i + 1, record.input, state);
        const commitment = await sha256(previousHash + '|' + codeHash + '|' + serialized);

        // 4. Verify Proof of Work (The "Heavy Proof")
        // logic: hash(commitment + nonce)
        const dataToHash = commitment + record.nonce;
        const calculatedPoW = await sha256(dataToHash);
        
        // 5. Verify Hash Matches Claim (Optional, as hash might be omitted for compression)
        if (record.hash && calculatedPoW !== record.hash) {
            return { 
                valid: false, 
                reason: `PoW Hash mismatch at tick ${i}. Proof is invalid.`,
                tick: i 
            };
        }
        
        // 6. Verify Proof of Work (Leading Zeros)
        const target = '0'.repeat(record.difficulty);
        if (!calculatedPoW.startsWith(target)) {
             return { 
                valid: false, 
                reason: `Proof of Work failed at tick ${i}. Hash does not meet difficulty target.`,
                tick: i 
            };
        }

        // Advance chain with the commitment, NOT the PoW hash
        previousHash = commitment;
        
        // Update progress every 50 ticks to not spam
        if (i % 50 === 0 && onProgress) {
            onProgress(i / totalTicks);
        }
    }

    if (engine.state.score !== proof.finalScore) {
        return { valid: false, reason: `Score mismatch. Proof says ${proof.finalScore}, Engine says ${engine.state.score}` };
    }

    return { valid: true, score: engine.state.score };
}