import React, { useEffect, useState, useRef } from 'react';
import { playClickSound } from '../utils/sound';

const AVAILABLE_ZONES = [
  'UTC', 'America/New_York', 'America/Los_Angeles', 'Europe/London', 'Europe/Berlin', 'Asia/Tokyo', 'Australia/Sydney'
];

function formatTZ(date, tz) {
  try {
    return new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: tz }).format(date);
  } catch {
    return date.toLocaleTimeString();
  }
}

export default function RemoteWorkerExample() {
  const [zones, setZones] = useState(() => {
    try {
      const raw = localStorage.getItem('remote_worker_zones');
      return raw ? JSON.parse(raw) : ['UTC', 'America/New_York', 'Asia/Tokyo'];
    } catch {
      return ['UTC', 'America/New_York', 'Asia/Tokyo'];
    }
  });

  const [now, setNow] = useState(new Date());
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('remote_worker_zones', JSON.stringify(zones));
    } catch {
      // ignore storage errors silently
    }
  }, [zones]);

  const updateZone = (index, tz) => {
    setZones(z => z.map((zv, i) => i === index ? tz : zv));
  };

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', padding: 24 }}>
  <a href="/" style={{ display: 'inline-block', marginBottom: 18, textDecoration: 'none', color: '#184e8b', fontWeight: 700 }} onClick={() => { playClickSound(); setTimeout(()=> window.location.href='/', 120); }}>← Back to Sales Page</a>
      <h1 style={{ marginBottom: 6 }}>Remote Worker Dashboard — Example</h1>
      <p style={{ color: '#666', marginBottom: 18 }}>Three clocks for different time zones. Choose zones and they persist for your browser.</p>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 18 }}>
        {zones.map((tz, idx) => (
          <div key={idx} style={{ minWidth: 200, padding: 16, borderRadius: 12, background: 'white', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
            <div style={{ fontSize: '0.9em', color: '#666', marginBottom: 8 }}>Zone</div>
            <select value={tz} onChange={(e) => updateZone(idx, e.target.value)} style={{ width: '100%', padding: 8, borderRadius: 8, marginBottom: 12 }}>
              {AVAILABLE_ZONES.map(z => <option key={z} value={z}>{z}</option>)}
            </select>
            <div style={{ fontSize: '2em', fontWeight: 700, textAlign: 'center' }}>{formatTZ(now, tz)}</div>
            <div style={{ textAlign: 'center', marginTop: 8, color: '#444' }}>{tz}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 12 }}>
        <button onClick={() => { setZones(['UTC','America/New_York','Asia/Tokyo']); playClickSound(); }} style={{ padding: '10px 14px', borderRadius: 10, background: '#184e8b', color: 'white', border: 'none', fontWeight: 700 }}>Reset to Defaults</button>
        <button onClick={() => { playClickSound(); setTimeout(()=> window.location.href='/?test=true', 120); }} style={{ padding: '10px 14px', borderRadius: 10, background: '#06b6d4', color: 'white', border: 'none', fontWeight: 700 }}>Open in Builder</button>
      </div>
    </div>
  );
}
