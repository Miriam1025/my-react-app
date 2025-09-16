import React from 'react';

const PageSettings = ({ pageTitle, setPageTitle, selectedTheme, setSelectedTheme, themes }) => {
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
    </div>
  );
};

export default PageSettings;
