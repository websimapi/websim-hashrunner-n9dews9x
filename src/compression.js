/**
 * Compression utilities for Hash Runner proofs.
 * Reduces storage size by ~95% by bit-packing boolean/integer fields
 * and removing redundant hashes (which are recomputed during verification).
 */

export function compressInputs(inputs) {
    const buffer = new Uint8Array(inputs.length * 5);
    const view = new DataView(buffer.buffer);
    
    for (let i = 0; i < inputs.length; i++) {
        const item = inputs[i];
        const offset = i * 5;
        
        // Byte 0: J D D D 0 0 0 0
        // J = Jump (bit 7)
        // D = Difficulty (bits 6-4)
        const jumpBit = item.input.jump ? 0x80 : 0;
        const diffBits = (item.difficulty & 0x07) << 4;
        view.setUint8(offset, jumpBit | diffBits);
        
        // Bytes 1-4: Nonce (32 bit unsigned integer)
        view.setUint32(offset + 1, item.nonce);
    }
    
    // Convert to base64 string
    let binary = '';
    const len = buffer.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(buffer[i]);
    }
    return btoa(binary);
}

export function decompressInputs(base64Str) {
    try {
        const binary = atob(base64Str);
        const len = binary.length;
        const buffer = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            buffer[i] = binary.charCodeAt(i);
        }
        const view = new DataView(buffer.buffer);
        const inputs = [];
        const count = Math.floor(len / 5);
        
        for (let i = 0; i < count; i++) {
            const offset = i * 5;
            const byte0 = view.getUint8(offset);
            const jump = (byte0 & 0x80) !== 0;
            const difficulty = (byte0 >> 4) & 0x07;
            const nonce = view.getUint32(offset + 1);
            
            inputs.push({
                input: { jump },
                difficulty,
                nonce,
                hash: null // Hash is not stored to save space; Verifier will compute it
            });
        }
        return inputs;
    } catch (e) {
        console.error("Decompression failed", e);
        return [];
    }
}

export function compressProof(proof) {
    // Return a new object, don't mutate original
    if (proof.compressedInputs) return { ...proof };
    
    // If no inputs, nothing to compress
    if (!proof.inputs) return { ...proof };

    const { inputs, ...rest } = proof;
    return {
        ...rest,
        compressedInputs: compressInputs(inputs)
    };
}

export function decompressProof(proof) {
    // If already has inputs array, it's either legacy or already decompressed
    if (proof.inputs && Array.isArray(proof.inputs)) return { ...proof }; 
    
    // If no compressed inputs, return as is (might be empty proof)
    if (!proof.compressedInputs) return { ...proof };

    const { compressedInputs, ...rest } = proof;
    return {
        ...rest,
        inputs: decompressInputs(compressedInputs)
    };
}