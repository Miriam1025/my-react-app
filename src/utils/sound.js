// small WebAudio click sound helper
export function playClickSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(1000, ctx.currentTime);
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    setTimeout(() => {
      try { o.stop(); ctx.close(); } catch(err) { console.debug('audio close failed', err); }
    }, 200);
  } catch (e) {
    // WebAudio may be blocked in some environments; ignore silently
    console.warn('Audio not available', e);
  }
}
