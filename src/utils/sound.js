// small WebAudio click sound helper
let _audioCtx = null;
export function playClickSound() {
  try {
    if (!window || !('AudioContext' in window || 'webkitAudioContext' in window)) return;
    if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (_audioCtx.state === 'suspended') _audioCtx.resume();

    const o = _audioCtx.createOscillator();
    const g = _audioCtx.createGain();
    o.type = 'triangle';
    const now = _audioCtx.currentTime;
    o.frequency.setValueAtTime(1000, now);

    // very short gain envelope for a click
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.12, now + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

    o.connect(g);
    g.connect(_audioCtx.destination);
    o.start(now);
    o.stop(now + 0.14);
    // keep context open for future clicks (avoids resume latency)
  } catch {
    // WebAudio may be blocked in some environments; ignore silently
  }
}
