/**
 * Deterministic Random Number Generator
 * Uses Mulberry32 algorithm
 */
export class SeededRNG {
    constructor(seedString) {
        // Create a hash of the seed string to get a numeric seed
        let h = 2166136261 >>> 0;
        for (let i = 0; i < seedString.length; i++) {
            h = Math.imul(h ^ seedString.charCodeAt(i), 16777619);
        }
        this.state = h >>> 0;
    }

    // Returns a float between 0 and 1
    next() {
        let t = this.state += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        this.state = t; // Update state
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }

    // Returns integer between min and max (inclusive)
    nextInt(min, max) {
        return Math.floor(this.next() * (max - min + 1)) + min;
    }

    // Get current state for saving/hashing
    getState() {
        return this.state;
    }
}