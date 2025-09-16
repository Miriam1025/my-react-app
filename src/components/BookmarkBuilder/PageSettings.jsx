import React from 'react';
import PropTypes from 'prop-types';

const PageSettings = ({ pageTitle, setPageTitle, selectedTheme, setSelectedTheme, themes, widgets, addWidget, removeWidget, updateWidget }) => {
  return (
    <div>
      <h2 style={{ marginBottom: '30px', color: '#2c3e50' }}>Build Your Page</h2>

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
          <button onClick={() => addWidget()} style={{ padding: '8px 12px', borderRadius: 8 }}>+ Add Widget</button>
        </div>

        <div style={{ display: 'grid', gap: 8 }}>
          {widgets.map((w) => (
            <div key={w.id} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <select value={w.type} onChange={(e) => updateWidget(w.id, { ...w, type: e.target.value })} style={{ padding: 8 }}>
                <option value="search">Search</option>
                <option value="featured">Featured Link</option>
                <option value="text">Text</option>
              </select>
              <input value={w.label || ''} onChange={(e) => updateWidget(w.id, { ...w, label: e.target.value })} placeholder="Label / content" style={{ flex: 1, padding: 8 }} />
              <button onClick={() => removeWidget(w.id)} style={{ padding: '6px 8px' }}>Remove</button>
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
  selectedTheme: PropTypes.string,
  setSelectedTheme: PropTypes.func,
  themes: PropTypes.object,
  widgets: PropTypes.array,
  addWidget: PropTypes.func,
  removeWidget: PropTypes.func,
  updateWidget: PropTypes.func
};
