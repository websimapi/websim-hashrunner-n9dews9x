import { createMiningWorker } from './crypto.js';

// Use hardware concurrency if available, default to 4
// Clamp between 2 and 16 to be safe for various devices
const MAX_WORKERS = (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) || 4;
const WORKER_COUNT = Math.max(2, Math.min(16, MAX_WORKERS));

let workerPool = []; // Array of { worker: Worker, busy: boolean }
let miningQueue = [];

/**
 * Queues a proof of work task to be processed by the worker pool.
 * @param {string} commitment - The hash commitment to mine against
 * @param {number} difficulty - The target difficulty (number of leading zeros)
 * @returns {Promise<{hash: string, nonce: number}>}
 */
export function mineProofOfWork(commitment, difficulty) {
    return new Promise((resolve) => {
        miningQueue.push({ commitment, difficulty, resolve });
        processQueue();
    });
}

function processQueue() {
    // Try to assign all queued tasks to available workers
    while (miningQueue.length > 0) {
        const workerSlot = getAvailableWorker();
        
        // If no workers available, stop processing (will resume when a worker finishes)
        if (!workerSlot) {
            return;
        }

        const task = miningQueue.shift();
        runWorker(workerSlot, task);
    }
}

function getAvailableWorker() {
    // 1. Find an idle existing worker
    const idleWorker = workerPool.find(w => !w.busy);
    if (idleWorker) return idleWorker;

    // 2. If we can spawn more workers (up to limit), do so
    if (workerPool.length < WORKER_COUNT) {
        const newWorker = {
            worker: createMiningWorker(),
            busy: false
        };
        workerPool.push(newWorker);
        return newWorker;
    }

    // 3. No workers available right now
    return null;
}

function runWorker(slot, task) {
    slot.busy = true;
    const worker = slot.worker;

    // Handle the result for this specific task
    const handleMessage = (e) => {
        // Cleanup listener
        worker.removeEventListener('message', handleMessage);
        
        // Free up the worker
        slot.busy = false;
        
        // Return result to the caller
        task.resolve(e.data); // {hash, nonce}
        
        // Process next task in queue immediately
        processQueue();
    };

    worker.addEventListener('message', handleMessage);
    
    worker.postMessage({
        id: Math.random(),
        prefix: task.commitment,
        difficulty: task.difficulty
    });
}

export function terminateMiningWorker() {
    workerPool.forEach(w => w.worker.terminate());
    workerPool = [];
    miningQueue = [];
}