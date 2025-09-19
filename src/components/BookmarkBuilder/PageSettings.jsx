import React from 'react';
import PropTypes from 'prop-types';

const PageSettings = ({ pageTitle, setPageTitle, headerTitle, setHeaderTitle, selectedTheme, setSelectedTheme, themes, widgets, addWidget, removeWidget, updateWidget }) => {
  const AVAILABLE_ZONES = [
    'America/Chicago', // Minneapolis uses Central Time (America/Chicago)
    'UTC', 'America/New_York', 'America/Denver', 'America/Los_Angeles',
    'America/Phoenix', 'America/Anchorage', 'America/Adak', 'Pacific/Honolulu',
    'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Europe/Madrid', 'Europe/Rome',
    'Asia/Tokyo', 'Asia/Shanghai', 'Asia/Singapore', 'Asia/Kolkata', 'Asia/Dubai',
    'Australia/Sydney', 'Australia/Melbourne', 'Australia/Brisbane', 'Australia/Perth',
    'Africa/Johannesburg', 'Africa/Cairo', 'Africa/Lagos', 'Africa/Nairobi'
  ];

  // helper handlers to avoid deeply nested inline functions
  const onZoneTzChange = (widgetId, zoneId, tz) => {
    const w = widgets.find(w => w.id === widgetId);
    if (!w) return;
    const next = { ...w, zones: (w.zones || []).map(z => z.id === zoneId ? { ...z, tz } : z) };
    updateWidget(widgetId, next);
  };

  const onZoneLabelChange = (widgetId, zoneId, label) => {
    const w = widgets.find(w => w.id === widgetId);
    if (!w) return;
    const next = { ...w, zones: (w.zones || []).map(z => z.id === zoneId ? { ...z, label } : z) };
    updateWidget(widgetId, next);
  };

  const onRemoveZone = (widgetId, zoneId) => {
    const w = widgets.find(w => w.id === widgetId);
    if (!w) return;
    const next = { ...w, zones: (w.zones || []).filter(z => z.id !== zoneId) };
    updateWidget(widgetId, next);
  };

  const onAddZone = (widgetId) => {
    const w = widgets.find(w => w.id === widgetId);
    if (!w) return;
    const newZone = { id: Date.now() + Math.random(), tz: AVAILABLE_ZONES[0], label: '' };
    const next = { ...w, zones: [ ...(w.zones || []), newZone ] };
    updateWidget(widgetId, next);
  };
  return (
    <div>
      <h2 style={{ marginBottom: '30px', color: '#2c3e50' }}>Build Your Page</h2>

      <div style={{ marginBottom: '30px' }}>
        <label htmlFor="headerTitle" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#333' }}>Header Title:</label>
        <input
          id="headerTitle"
          type="text"
          value={headerTitle}
          onChange={(e) => setHeaderTitle(e.target.value)}
          style={{ width: '100%', padding: '12px', border: '2px solid #e0e0e0', borderRadius: '8px', fontSize: '1em' }}
          placeholder="My Bookmarks Header"
        />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <label htmlFor="pageTitle" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#333' }}>Page Title:</label>
        <input
          id="pageTitle"
          type="text"
          value={pageTitle}
          onChange={(e) => setPageTitle(e.target.value)}
          style={{ width: '100%', padding: '12px', border: '2px solid #e0e0e0', borderRadius: '8px', fontSize: '1em' }}
          placeholder="My Awesome Bookmarks"
        />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <div style={{ display: 'block', marginBottom: '15px', fontWeight: 600, color: '#333' }}>Choose Theme:</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              onClick={() => setSelectedTheme(key)}
              style={{
                padding: '15px',
                border: selectedTheme === key ? '3px solid #667eea' : '2px solid #e0e0e0',
                borderRadius: '10px',
                background: theme.gradient,
                color: key === 'minimal' ? '#333' : 'white',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {theme.name}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ fontWeight: 600, color: '#333' }}>Widgets</div>
          <button onClick={() => addWidget()} style={{ 
  padding: '12px 16px', 
  borderRadius: 8, 
  backgroundColor: '#4CAF50', 
  color: 'white', 
  fontWeight: 'bold', 
  border: 'none', 
  cursor: 'pointer', 
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
  transition: 'background-color 0.3s ease' 
}} 
  onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'} 
  onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'} 
  onFocus={(e) => e.target.style.backgroundColor = '#45a049'} 
  onBlur={(e) => e.target.style.backgroundColor = '#4CAF50'}>+ Add Widget</button>
        </div>

        <div style={{ display: 'grid', gap: 8 }}>
          {widgets.map((w) => (
            <div key={w.id} style={{ display: 'flex', gap: 8, flexDirection: 'column', alignItems: 'stretch' }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <select value={w.type} onChange={(e) => updateWidget(w.id, { ...w, type: e.target.value })} style={{ padding: 8 }}>
                  <option value="search">Search</option>
                  <option value="featured">Featured Link</option>
                  <option value="text">Text</option>
                  <option value="clocks">Clocks</option>
                </select>
                <input value={w.label || ''} onChange={(e) => updateWidget(w.id, { ...w, label: e.target.value })} placeholder="Label / content" style={{ flex: 1, padding: 8 }} />
                <button 
                  onClick={() => removeWidget(w.id)} 
                  style={{ 
                    padding: '6px 10px',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    background: '#f3f4f6',
                    color: '#4b5563',
                    fontWeight: '500',
                    cursor: 'pointer',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                  }}
                >
                  Remove
                </button>
              </div>

              {/* Clocks widget configuration */}
              {w.type === 'clocks' && (
                <div style={{ marginTop: 8, padding: 8, borderRadius: 8, background: '#f3f4f6' }}>
                  <div style={{ fontWeight: 600, marginBottom: 8 }}>Clocks</div>
                  {(w.zones || []).map((z) => (
                    <div key={z.id} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                      <select value={z.tz} onChange={(e) => onZoneTzChange(w.id, z.id, e.target.value)} style={{ padding: 8 }}>
                        {AVAILABLE_ZONES.map(zone => {
                          // Special handling for Minneapolis (uses America/Chicago)
                          if (zone === 'America/Chicago') {
                            return <option key={zone} value={zone}>Minneapolis, MN (Mayo Clinic)</option>;
                          }
                          return <option key={zone} value={zone}>{zone}</option>;
                        })}
                      </select>
                      <input value={z.label || ''} onChange={(e) => onZoneLabelChange(w.id, z.id, e.target.value)} placeholder="Custom label (optional)" style={{ flex: 1, padding: 8 }} />
                      <button 
                        onClick={() => onRemoveZone(w.id, z.id)} 
                        style={{ 
                          padding: '6px 10px',
                          border: '1px solid #d1d5db',
                          borderRadius: '4px',
                          background: '#f3f4f6',
                          color: '#4b5563',
                          fontWeight: '500',
                          cursor: 'pointer',
                          boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <div>
                    <button 
                      onClick={() => onAddZone(w.id)} 
                      style={{ 
                        padding: '8px 12px', 
                        borderRadius: '6px',
                        background: '#4f46e5',
                        color: 'white',
                        border: 'none',
                        fontWeight: '500',
                        cursor: 'pointer',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                      }}
                    >
                      + Add Zone
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageSettings;
PageSettings.propTypes = {
  pageTitle: PropTypes.string,
  setPageTitle: PropTypes.func,
  headerTitle: PropTypes.string,
  setHeaderTitle: PropTypes.func,
  selectedTheme: PropTypes.string,
  setSelectedTheme: PropTypes.func,
  themes: PropTypes.object,
  widgets: PropTypes.array,
  addWidget: PropTypes.func,
  removeWidget: PropTypes.func,
  updateWidget: PropTypes.func
};
