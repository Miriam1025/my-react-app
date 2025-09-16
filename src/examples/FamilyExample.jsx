import React from 'react';
import { playClickSound } from '../utils/sound';

export default function FamilyExample() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', padding: 24 }}>
      <a href="/" style={{ display: 'inline-block', marginBottom: 18, textDecoration: 'none', color: '#0b5e43', fontWeight: 700 }} onClick={(e) => { e.preventDefault(); playClickSound(); setTimeout(()=> window.location.href='/', 120); }}>← Back to Sales Page</a>
      <h1 style={{ marginBottom: 6 }}>Family Hub — Example</h1>
      <p style={{ color: '#666', marginBottom: 18 }}>A family-focused layout for shared links: meal planning, family calendar, streaming, and learning resources.</p>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 320 }}>
          <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
            <div style={{ background: '#ffffff', padding: 18, borderBottom: '1px solid #eef2f6' }}>
              <h3 style={{ margin: 0, color: '#0b5e43' }}>🏠 The Johnson Family Hub</h3>
            </div>
            <div style={{ background: 'white', padding: 16 }}>
              <div style={{ display: 'grid', gap: 8 }}>
                <a href="/" style={{ padding: 10, borderRadius: 8, background: '#f1f5f9', textDecoration: 'none', color: '#0b5e43' }}>🍕 Meal Planning</a>
                <a href="/" style={{ padding: 10, borderRadius: 8, background: '#f1f5f9', textDecoration: 'none', color: '#0b5e43' }}>🎬 Family Netflix</a>
                <a href="/" style={{ padding: 10, borderRadius: 8, background: '#f1f5f9', textDecoration: 'none', color: '#0b5e43' }}>🛒 Online Shopping</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: 320 }}>
          <h4 style={{ marginTop: 0 }}>What this example shows</h4>
          <ul style={{ color: '#444' }}>
            <li>Simple family layout</li>
            <li>Quick action links and shared resources</li>
            <li>Export to share with family members</li>
          </ul>

          <button onClick={() => { playClickSound(); setTimeout(()=> window.location.href='/?test=true', 120); }} style={{ marginTop: 12, padding: '10px 14px', borderRadius: 10, background: '#0b5e43', color: 'white', border: 'none', fontWeight: 700 }}>Open in Builder</button>
        </div>
      </div>
    </div>
  );
}
