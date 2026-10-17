import { SeededRNG } from './rng.js';

/**
 * Deterministic Game Engine
 * "Hash Runner" - An endless runner where gravity and obstacles are deterministic.
 */

export const GAME_CONSTANTS = {
    GRAVITY: 0.6,
    JUMP_FORCE: -12,
    GROUND_Y: 300,
    PLAYER_X: 50,
    SPEED: 6,
    OBSTACLE_SPAWN_RATE: 90, // Frames
    WIDTH: 800,
    HEIGHT: 400
};

export class GameEngine {
    constructor(seed) {
        this.seed = seed;
        this.rng = new SeededRNG(seed);
        this.reset();
    }

    reset() {
        this.tickCount = 0;
        this.gameOver = false;
        
        this.state = {
            score: 0,
            player: {
                y: GAME_CONSTANTS.GROUND_Y,
                dy: 0,
                width: 30,
                height: 50,
                grounded: true
            },
            obstacles: [], // {x, y, w, h}
            particles: [], // {x, y, vx, vy, life} - Visual only, but if physics interact, must be deterministic
            rngState: this.rng.getState()
        };
    }

    /**
     * Advances game by one tick
     * @param {Object} input - { jump: boolean }
     * @returns {Object} - The new state
     */
    tick(input) {
        if (this.gameOver) return this.state;

        this.tickCount++;
        const s = this.state;
        const c = GAME_CONSTANTS;

        // --- Player Physics ---
        if (input.jump && s.player.grounded) {
            s.player.dy = c.JUMP_FORCE;
            s.player.grounded = false;
        }

        s.player.dy += c.GRAVITY;
        s.player.y += s.player.dy;

        // Ground Collision
        if (s.player.y >= c.GROUND_Y) {
            s.player.y = c.GROUND_Y;
            s.player.dy = 0;
            s.player.grounded = true;
        }

        // --- Obstacles ---
        // Move obstacles
        for (let i = s.obstacles.length - 1; i >= 0; i--) {
            let obs = s.obstacles[i];
            obs.x -= c.SPEED;
            
            // Cleanup
            if (obs.x + obs.w < 0) {
                s.obstacles.splice(i, 1);
                s.score += 10; // Score for passing
            }
        }

        // Spawn Obstacles (Deterministic based on Tick)
        if (this.tickCount % c.OBSTACLE_SPAWN_RATE === 0) {
            // Use RNG for variety
            const height = this.rng.nextInt(30, 70);
            const type = this.rng.next() > 0.8 ? 'flying' : 'ground';
            
            let yPos = c.GROUND_Y; // Ground based
            if (type === 'flying') {
                yPos = c.GROUND_Y - 90; // Flying
            }

            s.obstacles.push({
                x: c.WIDTH,
                y: yPos - (type === 'ground' ? 0 : height), // Adjust for anchor
                w: 30,
                h: height,
                type: type
            });
        }

        // --- Collision Detection ---
        const pRect = {
            l: c.PLAYER_X,
            r: c.PLAYER_X + s.player.width,
            t: s.player.y - s.player.height, // Player Y is bottom anchor
            b: s.player.y
        };

        for (let obs of s.obstacles) {
            const oRect = {
                l: obs.x,
                r: obs.x + obs.w,
                t: obs.y - obs.h, // Obstacle Y is bottom anchor
                b: obs.y
            };

            if (pRect.l < oRect.r &&
                pRect.r > oRect.l &&
                pRect.t < oRect.b &&
                pRect.b > oRect.t) {
                this.gameOver = true;
            }
        }

        // Save RNG state for hashing
        s.rngState = this.rng.getState();

        return this.state;
    }

    getState() {
        return JSON.parse(JSON.stringify(this.state));
    }
}