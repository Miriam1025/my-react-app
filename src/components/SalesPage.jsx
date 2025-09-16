import React from 'react';
import BookmarkBuilder from './BookmarkBuilder';
import { playClickSound } from '../utils/sound';

export default function SalesPage() {
  const isTestMode = window.location.search.includes('test=true');
  if (isTestMode) return <BookmarkBuilder />;

  const personaStyle = (bg, color) => ({
    padding: '12px 22px',
    borderRadius: 12,
    background: bg,
    color: color || 'white',
    textDecoration: 'none',
    fontWeight: 700,
    border: '1px solid rgba(0,0,0,0.06)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.14)',
    transition: 'transform 120ms ease, box-shadow 120ms ease'
  });

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', lineHeight: 1.6, color: '#333' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '100px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontSize: '3.5em', fontWeight: 700, marginBottom: '20px', lineHeight: 1.15 }}>Create Beautiful Bookmark Pages in Minutes</h1>
          <p style={{ fontSize: '1.25em', marginBottom: '20px', opacity: 0.95 }}>Organize your favorite websites with stunning, professional designs. No coding required!</p>
          <div style={{ fontSize: '1.7em', fontWeight: 700, margin: '6px 0' }}>$29</div>
          <div style={{ opacity: 0.9, fontSize: '0.95em', marginBottom: '8px' }}>One-time purchase • Instant download</div>
        </div>
      </section>

      {/* Examples */}
      <section style={{ padding: '48px 20px', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: 18, fontSize: '1.05em', color: '#444' }}>See our product in context — jump to a sample page tailored to your needs.</div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 22 }}>
            <a href="/examples#student" onMouseDown={() => playClickSound()} style={personaStyle('#184e8b', '#fff')} onFocus={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onBlur={(e) => e.currentTarget.style.transform = 'translateY(0)'}>👩‍🎓 Student Study Hub</a>
            <a href="/examples#freelancer" onMouseDown={() => playClickSound()} style={personaStyle('#0f172a', '#fff')} onFocus={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onBlur={(e) => e.currentTarget.style.transform = 'translateY(0)'}>💼 Freelancer Dashboard</a>
            <a href="/examples#designer" onMouseDown={() => playClickSound()} style={personaStyle('linear-gradient(180deg,#7a6ce0,#f7d9fb)')} onFocus={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onBlur={(e) => e.currentTarget.style.transform = 'translateY(0)'}>🎨 Designer Inspiration</a>
            <a href="/examples#family" onMouseDown={() => playClickSound()} style={personaStyle('#0b5e43', '#fff')} onFocus={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onBlur={(e) => e.currentTarget.style.transform = 'translateY(0)'}>👨‍👩‍👧‍👦 Family Hub</a>
          </div>

          <div style={{ marginTop: 18 }}>
            <a href="https://buy.stripe.com/7sY8wPfd5dsgbNOeIebEA00" target="_blank" rel="noreferrer" onMouseDown={() => playClickSound()} style={{ padding: '12px 26px', borderRadius: 14, background: '#ff6b6b', color: 'white', textDecoration: 'none', fontWeight: 800, boxShadow: '0 12px 36px rgba(0,0,0,0.12)' }}>Get Started Now — $29</a>
          </div>

              <div style={{ marginTop: 12, fontSize: '0.9em', color: '#666' }}>Each example opens a sample page. Click the "Return to Sales Page" button at the top of that example to come back here.</div>
            </div>
          </section>
        </div>
      );
    }