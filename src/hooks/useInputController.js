import { useEffect, useRef } from 'react';

export const useInputController = (viewRef, onReplayInput) => {
    const keys = useRef({ jump: false });

    useEffect(() => {
        const handleJump = (active, e) => {
            if (viewRef.current === 'replay') {
                if (active && e && (e.type === 'mousedown' || e.type === 'touchstart' || e.code === 'Space')) {
                     // Trigger replay cancel or action
                     onReplayInput();
                }
                return;
            }

            // Only allow jump if in game view and not clicking UI
            if (viewRef.current !== 'game') return;
            
            // If it's a click/touch, check if we hit a button
            if (e && (e.type === 'mousedown' || e.type === 'touchstart')) {
                if (e.target.closest('button') || e.target.closest('input') || e.target.closest('textarea')) {
                    return;
                }
                // Prevent defaults on canvas touches to stop scrolling
                if (e.cancelable) e.preventDefault();
            }
            
            keys.current.jump = active;
        };

        const down = (e) => {
            if (e.code === 'Space' || e.code === 'ArrowUp') {
                handleJump(true, e);
            }
        };
        const up = (e) => {
            if (e.code === 'Space' || e.code === 'ArrowUp') {
                handleJump(false, e);
            }
        };
        
        const touchStart = (e) => handleJump(true, e);
        const touchEnd = (e) => handleJump(false, e);

        window.addEventListener('keydown', down);
        window.addEventListener('keyup', up);
        window.addEventListener('touchstart', touchStart, { passive: false });
        window.addEventListener('touchend', touchEnd);
        window.addEventListener('mousedown', touchStart);
        window.addEventListener('mouseup', touchEnd);

        return () => {
            window.removeEventListener('keydown', down);
            window.removeEventListener('keyup', up);
            window.removeEventListener('touchstart', touchStart);
            window.removeEventListener('touchend', touchEnd);
            window.removeEventListener('mousedown', touchStart);
            window.removeEventListener('mouseup', touchEnd);
        };
    }, []);

    return keys;
};