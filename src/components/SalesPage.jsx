import React from 'react';
import BookmarkBuilder from './BookmarkBuilder';
import { playClickSound } from '../utils/sound';
import './SalesPage.css';

export default function SalesPage() {
  const isTestMode = typeof window !== 'undefined' && window.location.search.includes('test=true');
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
    transition: 'transform 120ms ease, box-shadow 120ms ease',
    display: 'inline-block'
  });

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', lineHeight: 1.6, color: '#333' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontSize: '3em', fontWeight: 700, marginBottom: '16px', lineHeight: 1.15 }}>Create Beautiful Bookmark Pages in Minutes</h1>
          <p style={{ fontSize: '1.1em', marginBottom: '12px', opacity: 0.95 }}>Organize your favorite websites with stunning, professional designs. No coding required!</p>
          <div style={{ fontSize: '1.4em', fontWeight: 700, margin: '6px 0' }}>$29</div>
          <div style={{ opacity: 0.9, fontSize: '0.95em', marginBottom: '8px' }}>One-time purchase • Instant download</div>
        </div>
      </section>

      {/* Examples */}
      <section style={{ padding: '48px 20px', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: 18, fontSize: '1.05em', color: '#444' }}>See our product in context — jump to a sample page tailored to your needs.</div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 22 }}>
            <a
              href="/examples/student"
              onClick={(e) => { e.preventDefault(); playClickSound(); setTimeout(() => window.location.href = '/examples/student', 140); }}
              className="sales-persona"
              style={personaStyle('#184e8b', '#fff')}
            >
              👩‍🎓 Student Study Hub
            </a>

            <a
              href="/examples/freelancer"
              onClick={(e) => { e.preventDefault(); playClickSound(); setTimeout(() => window.location.href = '/examples/freelancer', 140); }}
              className="sales-persona"
              style={personaStyle('#0f172a', '#fff')}
            >
              💼 Freelancer Dashboard
            </a>

            <a
              href="/examples/designer"
              onClick={(e) => { e.preventDefault(); playClickSound(); setTimeout(() => window.location.href = '/examples/designer', 140); }}
              className="sales-persona"
              style={personaStyle('linear-gradient(180deg,#5b44d8 0%, #4a2fa0 100%)')}
            >
              🎨 Designer Inspiration
            </a>

            <a
              href="/examples/family"
              onClick={(e) => { e.preventDefault(); playClickSound(); setTimeout(() => window.location.href = '/examples/family', 140); }}
              className="sales-persona"
              style={personaStyle('#0b5e43', '#fff')}
            >
              👨‍👩‍👧‍👦 Family Hub
            </a>

            <a
              href="/examples/remote-worker"
              onClick={(e) => { e.preventDefault(); playClickSound(); setTimeout(() => window.location.href = '/examples/remote-worker', 140); }}
              className="sales-persona"
              style={personaStyle('#06b6d4', '#fff')}
            >
              🕒 Remote Worker Dashboard
            </a>
          </div>

          {/* CTA under examples */}
          <div style={{ marginTop: 18 }}>
            <a
              href="https://buy.stripe.com/7sY8wPfd5dsgbNOeIebEA00"
              target="_blank"
              rel="noreferrer"
              onMouseDown={() => playClickSound()}
              className="sales-cta"
              style={{ background: '#ff6b6b', color: 'white' }}
            >
              Get Started Now — $29
            </a>
          </div>

          <div style={{ marginTop: 12, fontSize: '0.9em', color: '#666' }}>Each example opens a sample page. Use the "Return to Sales Page" link on examples to come back here.</div>
        </div>
      </section>

      {/* Why choose */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.2em', fontWeight: 600, marginBottom: '20px', color: '#2c3e50' }}>Why Choose Our Bookmark Builder?</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
            <div style={{ textAlign: 'center', padding: '30px', borderRadius: '12px', background: 'white', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)' }}>
              <span style={{ fontSize: '2.8em', marginBottom: '12px', display: 'block' }}>🚀</span>
              <h3 style={{ fontSize: '1.2em', marginBottom: '10px', color: '#2c3e50' }}>No Coding Required</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>Simple form-based builder. Just fill in your links and descriptions — we handle the rest!</p>
            </div>

            <div style={{ textAlign: 'center', padding: '30px', borderRadius: '12px', background: 'white', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)' }}>
              <span style={{ fontSize: '2.8em', marginBottom: '12px', display: 'block' }}>🎨</span>
              <h3 style={{ fontSize: '1.2em', marginBottom: '10px', color: '#2c3e50' }}>4 Professional Themes</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>Corporate Blue, Executive Dark, Minimalist White, and Sunset Gradient themes included.</p>
            </div>

            <div style={{ textAlign: 'center', padding: '30px', borderRadius: '12px', background: 'white', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)' }}>
              <span style={{ fontSize: '2.8em', marginBottom: '12px', display: 'block' }}>📱</span>
              <h3 style={{ fontSize: '1.2em', marginBottom: '10px', color: '#2c3e50' }}>Mobile Responsive</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>Your bookmark pages look perfect on desktop, tablet, and mobile devices.</p>
            </div>

            <div style={{ textAlign: 'center', padding: '30px', borderRadius: '12px', background: 'white', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)' }}>
              <span style={{ fontSize: '2.8em', marginBottom: '12px', display: 'block' }}>🔍</span>
              <h3 style={{ fontSize: '1.2em', marginBottom: '10px', color: '#2c3e50' }}>Built-in Search</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>Find your bookmarks instantly with the integrated search functionality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '48px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.6em', marginBottom: '12px' }}>Ready to create your first page?</h3>
          <a href="https://buy.stripe.com/7sY8wPfd5dsgbNOeIebEA00" target="_blank" rel="noreferrer" onMouseDown={() => playClickSound()} className="sales-cta" style={{ background: '#06b6d4', color: 'white', padding: '14px 32px', borderRadius: 12 }}>
            Get Started Now — $29
          </a>
        </div>
      </section>
    </div>
  );
}