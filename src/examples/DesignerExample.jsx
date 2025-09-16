import React from 'react';
import { playClickSound } from '../utils/sound';

export default function DesignerExample() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', padding: 24 }}>
      <a href="/" style={{ display: 'inline-block', marginBottom: 18, textDecoration: 'none', color: '#5b44d8', fontWeight: 700 }} onClick={(e) => { e.preventDefault(); playClickSound(); setTimeout(()=> window.location.href='/', 120); }}>← Back to Sales Page</a>
      <h1 style={{ marginBottom: 6 }}>Designer Inspiration — Example</h1>
      <p style={{ color: '#666', marginBottom: 18 }}>A creative-first layout with colorful gradients, inspiration links, and quick pattern references for designers.</p>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 320 }}>
          <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
            <div style={{ background: 'linear-gradient(135deg,#5b44d8,#4a2fa0)', padding: 18 }}>
              <h3 style={{ margin: 0, color: 'white' }}>🎨 Emma's Creative Space</h3>
            </div>
            <div style={{ background: 'white', padding: 16 }}>
              <div style={{ display: 'grid', gap: 8 }}>
                <a href="/" style={{ padding: 10, borderRadius: 8, background: '#fff7fe', textDecoration: 'none', color: '#5b44d8' }}>🌈 Behance</a>
                <a href="/" style={{ padding: 10, borderRadius: 8, background: '#fff7fe', textDecoration: 'none', color: '#5b44d8' }}>📌 Pinterest</a>
                <a href="/" style={{ padding: 10, borderRadius: 8, background: '#fff7fe', textDecoration: 'none', color: '#5b44d8' }}>🎭 Dribbble</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: 320 }}>
          <h4 style={{ marginTop: 0 }}>What this example shows</h4>
          <ul style={{ color: '#444' }}>
            <li>Colorful gradients and imagery</li>
            <li>Design tool quick-links</li>
            <li>Theme export</li>
          </ul>

          <button onClick={() => { playClickSound(); setTimeout(()=> window.location.href='/?test=true', 120); }} style={{ marginTop: 12, padding: '10px 14px', borderRadius: 10, background: '#5b44d8', color: 'white', border: 'none', fontWeight: 700 }}>Open in Builder</button>
        </div>
      </div>
    </div>
  );
}
