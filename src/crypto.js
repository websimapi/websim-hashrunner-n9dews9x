import { GAME_CONSTANTS } from './engine.js';

/**
 * Cryptographic utilities
 */

export async function sha256(message) {
    // Encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);
    // Hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    // Convert ArrayBuffer to hex string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export function getDifficulty(state) {
    let difficulty = 2; // Base: '00' (trivial)
    
    // Score scaling
    if (state.score > 200) difficulty = 3; // '000' (fast)
    if (state.score > 1000) difficulty = 4; // '0000' (noticeable)
    if (state.score > 5000) difficulty = 5; // '00000' (heavy)

    // Suspicious play detection (Near miss)
    const playerX = GAME_CONSTANTS.PLAYER_X;
    const playerY = state.player.y;
    
    const isCloseCall = state.obstacles.some(obs => {
        // Simple bounding box expansion for "close"
        return (
            obs.x < playerX + 60 && 
            obs.x + obs.w > playerX - 30 &&
            Math.abs(obs.y - playerY) < 80
        );
    });

    if (isCloseCall) {
        difficulty = Math.min(difficulty + 1, 5);
    }
    
    return difficulty;
}

// Generate a compact string representation of the critical game state
// This is what gets hashed to prove the state existed
export function serializeStateForHashing(tick, input, state) {
    return [
        tick,
        input.jump ? 1 : 0,
        Math.floor(state.player.y * 100), // Fixed precision
        state.score,
        state.rngState
    ].join('|');
}

const workerCode = `
self.onmessage = async (e) => {
    const { id, prefix, difficulty } = e.data;
    const target = '0'.repeat(difficulty);
    let nonce = 0;
    
    const encoder = new TextEncoder();
    
    while (true) {
        // Simple mining loop
        const msg = prefix + nonce;
        const msgBuffer = encoder.encode(msg);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        
        if (hash.startsWith(target)) {
            self.postMessage({ id, hash, nonce });
            break;
        }
        nonce++;
    }
};
`;

export function createMiningWorker() {
    const blob = new Blob([workerCode], { type: 'application/javascript' });
    return new Worker(URL.createObjectURL(blob));
}