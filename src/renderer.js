import { GAME_CONSTANTS } from './engine.js';

export const renderFrame = (canvas, state, lastHash) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const c = GAME_CONSTANTS;

    // Clear with slightly transparent dark to allow trail effects if desired, 
    // but here we just solid clear to match the page bg
    ctx.fillStyle = '#09090b'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Grid (faint)
    ctx.strokeStyle = 'rgba(255,255,255,0.03)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for(let x=0; x<canvas.width; x+=100) { ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); }
    for(let y=0; y<canvas.height; y+=100) { ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); }
    ctx.stroke();

    // Hash Stream Background (Matrix style)
    if (lastHash) {
        ctx.fillStyle = '#10b981';
        ctx.font = '10px "JetBrains Mono"';
        ctx.textAlign = 'right';
        ctx.globalAlpha = 0.03;
        const hash = lastHash;
        for(let i=0; i<15; i++) {
            ctx.fillText(hash.substring(i*4, i*4+64), canvas.width - 20, 50 + i * 20);
        }
        ctx.globalAlpha = 1.0;
    }

    // Ground
    ctx.fillStyle = '#09090b'; // Same as bg to blend
    ctx.fillRect(0, c.GROUND_Y, canvas.width, canvas.height - c.GROUND_Y);
    
    // Neon Ground Line
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#10b981';
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, c.GROUND_Y);
    ctx.lineTo(canvas.width, c.GROUND_Y);
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Player
    const p = state.player;
    ctx.fillStyle = '#fff';
    ctx.shadowBlur = 20;
    ctx.shadowColor = 'rgba(255,255,255,0.5)';
    
    ctx.beginPath();
    ctx.roundRect(c.PLAYER_X, p.y - p.height, p.width, p.height, 6);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Visor (Cyberpunk style)
    ctx.fillStyle = '#10b981';
    ctx.fillRect(c.PLAYER_X + 22, p.y - p.height + 15, 8, 4);

    // Obstacles
    state.obstacles.forEach(obs => {
        const isFlying = obs.type === 'flying';
        
        ctx.shadowBlur = 20;
        ctx.shadowColor = isFlying ? 'rgba(236, 72, 153, 0.4)' : 'rgba(245, 158, 11, 0.4)';
        ctx.fillStyle = isFlying ? '#db2777' : '#d97706';
        
        ctx.beginPath();
        // Slightly distinct shapes
        if (isFlying) {
            ctx.roundRect(obs.x, obs.y - obs.h, obs.w, obs.h, 4);
        } else {
            // Triangle-ish top for ground spikes
            ctx.moveTo(obs.x, obs.y);
            ctx.lineTo(obs.x + obs.w, obs.y);
            ctx.lineTo(obs.x + obs.w, obs.y - obs.h + 10);
            ctx.lineTo(obs.x + obs.w/2, obs.y - obs.h);
            ctx.lineTo(obs.x, obs.y - obs.h + 10);
            ctx.closePath();
        }
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Tech detail
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(obs.x + obs.w/2 - 2, obs.y - obs.h + 10, 4, obs.h - 20);
    });
};