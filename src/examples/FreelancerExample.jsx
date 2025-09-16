import React from 'react';
import { playClickSound } from '../utils/sound';

export default function FreelancerExample() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', padding: 24 }}>
      <a href="/" style={{ display: 'inline-block', marginBottom: 18, textDecoration: 'none', color: '#0f172a', fontWeight: 700 }} onClick={(e) => { e.preventDefault(); playClickSound(); setTimeout(()=> window.location.href='/', 120); }}>← Back to Sales Page</a>
      <h1 style={{ marginBottom: 6 }}>Freelancer Dashboard — Example</h1>
      <p style={{ color: '#666', marginBottom: 18 }}>A productivity-focused dashboard for freelancers: client links, invoices, and quick access tools.</p>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 320 }}>
          <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
            <div style={{ background: 'linear-gradient(135deg,#0f172a,#1e293b)', padding: 18 }}>
              <h3 style={{ margin: 0, color: 'white' }}>💼 Mike's Business Dashboard</h3>
            </div>
            <div style={{ background: 'white', padding: 16 }}>
              <div style={{ display: 'grid', gap: 8 }}>
                <a href="/" style={{ padding: 10, borderRadius: 8, background: '#f1f5f9', textDecoration: 'none', color: '#0f172a' }}>👥 Client Portal</a>
                <a href="/" style={{ padding: 10, borderRadius: 8, background: '#f1f5f9', textDecoration: 'none', color: '#0f172a' }}>📊 Analytics</a>
                <a href="/" style={{ padding: 10, borderRadius: 8, background: '#f1f5f9', textDecoration: 'none', color: '#0f172a' }}>💰 Invoicing</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: 320 }}>
          <h4 style={{ marginTop: 0 }}>What this example shows</h4>
          <ul style={{ color: '#444' }}>
            <li>Organized client links</li>
            <li>Dark-theme preview</li>
            <li>Export and share</li>
          </ul>

          <button onClick={() => { playClickSound(); setTimeout(()=> window.location.href='/?test=true', 120); }} style={{ marginTop: 12, padding: '10px 14px', borderRadius: 10, background: '#0f172a', color: 'white', border: 'none', fontWeight: 700 }}>Open in Builder</button>
        </div>
      </div>
    </div>
  );
}
