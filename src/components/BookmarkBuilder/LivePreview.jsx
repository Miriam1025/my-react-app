import React from 'react';

const LivePreview = ({ pageTitle, categories, selectedTheme, themes, getCategoryHeaderColor, getLinkBackgroundColor, getLinkTextColor, getLinkBorderColor, openCredentialsForLink, openAddCreds }) => {
  return (
    <div style={{ background: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
      <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>Live Preview</h2>
      <div style={{
        backgroundImage: themes[selectedTheme].gradient,
        color: themes[selectedTheme].colors.text,
        borderRadius: '10px',
        padding: '20px',
        minHeight: '500px',
        overflow: 'hidden'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.5em', marginBottom: '10px' }}>{pageTitle}</h3>
          <div style={{
            background: 'rgba(255,255,255,0.9)',
            color: '#333',
            padding: '8px 15px',
            borderRadius: '20px',
            fontSize: '0.9em',
            display: 'inline-block'
          }}>
            🔍 Search your bookmarks...
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          {categories.map((category) => (
            <div key={category.id} style={{
              background: selectedTheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)',
              borderRadius: '8px',
              padding: '15px'
            }}>
              <h4 style={{
                marginBottom: '10px',
                color: getCategoryHeaderColor(selectedTheme),
                fontSize: '1em'
              }}>{category.name}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {category.links.slice(0, 4).map((link) => (
                  <div key={link.id} style={{
                    background: getLinkBackgroundColor(selectedTheme),
                    color: getLinkTextColor(selectedTheme),
                    padding: '6px 10px',
                    borderRadius: '4px',
                    borderLeft: `3px solid ${getLinkBorderColor(selectedTheme)}`,
                    fontSize: '0.8em'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>{link.name}</span>
                      <div>
                        <button onClick={() => openCredentialsForLink(link)} style={{ background: 'transparent', border: 'none', color: getLinkTextColor(selectedTheme), cursor: 'pointer', fontSize: '0.9em' }} title="View credentials">🔒</button>
                        <button onClick={() => openAddCreds(link)} style={{ background: 'transparent', border: 'none', color: getLinkTextColor(selectedTheme), cursor: 'pointer', fontSize: '0.9em', marginLeft: '6px' }} title="Add credentials for this link">➕</button>
                      </div>
                    </div>
                  </div>
                ))}
                {category.links.length > 4 && (
                  <div style={{ fontSize: '0.7em', opacity: 0.7, textAlign: 'center' }}>+{category.links.length - 4} more</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LivePreview;
