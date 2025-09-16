import React from 'react';
import { playClickSound } from '../utils/sound';

export default function StudentExample() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', padding: 24 }}>
      <a href="/" style={{ display: 'inline-block', marginBottom: 18, textDecoration: 'none', color: '#184e8b', fontWeight: 700 }} onClick={(e) => { e.preventDefault(); playClickSound(); setTimeout(()=> window.location.href='/', 120); }}>← Back to Sales Page</a>
      <h1 style={{ marginBottom: 6 }}>Student Study Hub — Example</h1>
      <p style={{ color: '#666', marginBottom: 18 }}>A compact, searchable bookmark page optimized for students: study resources, class portals, notes, and research links.</p>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 320 }}>
          <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
            <div style={{ background: 'linear-gradient(135deg,#e3f2fd, #f3e5f5)', padding: 18 }}>
              <h3 style={{ margin: 0, color: '#184e8b' }}>📚 Sarah's Study Hub</h3>
            </div>
            <div style={{ background: 'white', padding: 16 }}>
              <input placeholder="Search bookmarks..." style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #e6eefc', marginBottom: 12 }} />
              <div style={{ display: 'grid', gap: 8 }}>
                <a href="/" style={{ padding: 10, borderRadius: 8, background: '#f8fafc', textDecoration: 'none', color: '#1f2937' }}>📖 Khan Academy</a>
                <a href="/" style={{ padding: 10, borderRadius: 8, background: '#f8fafc', textDecoration: 'none', color: '#1f2937' }}>🎓 Coursera</a>
                <a href="/" style={{ padding: 10, borderRadius: 8, background: '#f8fafc', textDecoration: 'none', color: '#1f2937' }}>📝 Google Docs</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: 320 }}>
          <h4 style={{ marginTop: 0 }}>What this example shows</h4>
          <ul style={{ color: '#444' }}>
            <li>Searchable links</li>
            <li>Clean, student-focused layout</li>
            <li>Quick export (download static HTML)</li>
          </ul>

          <button onClick={() => { playClickSound(); setTimeout(()=> window.location.href='/?test=true', 120); }} style={{ marginTop: 12, padding: '10px 14px', borderRadius: 10, background: '#184e8b', color: 'white', border: 'none', fontWeight: 700 }}>Open in Builder</button>
        </div>
      </div>
    </div>
  );
}
