import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const BookmarkPreview = ({ pageTitle, headerTitle, categories, selectedTheme, themes, getCategoryHeaderColor, getLinkBackgroundColor, getLinkTextColor, getLinkBorderColor, openCredentialsForLink, widgets, linksWithCredentials = new Set() }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const safeCategories = Array.isArray(categories) ? categories : [];
  const searchRef = useRef(null);
  const timerRef = useRef(null);

  // Functions to handle hover with delay
  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowSearch(true);
      
      // After popup is shown, check if it's overflowing the container
      setTimeout(() => {
        if (searchRef.current) {
          const searchPopup = searchRef.current.querySelector('.search-popup');
          const containerRect = document.querySelector('.preview-container').getBoundingClientRect();
          
          if (searchPopup && containerRect) {
            const popupRect = searchPopup.getBoundingClientRect();
            
            // If popup extends beyond left edge of container
            if (popupRect.left < containerRect.left) {
              // Flip to the right side of the icon
              searchPopup.style.right = 'auto';
              searchPopup.style.left = '100%';
              searchPopup.style.marginLeft = '8px';
              searchPopup.style.marginRight = '0';
              // Make sure vertical alignment is maintained
              searchPopup.style.top = '50%';
              searchPopup.style.transform = 'translateY(-50%)';
            }
          }
        }
      }, 0);
    }, 100); // Small delay to prevent accidental triggering
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowSearch(false);
    }, 200); // Slightly longer delay when leaving to allow movement to popup
  };

  // Inject animation styles
  useEffect(() => {
    const styleEl = document.createElement('style');
    const styles = `
      @keyframes slideInFromRight {
        from { opacity: 0; transform: translateX(20px); }
        to { opacity: 1; transform: translateX(0); }
      }
      
      .search-container {
        position: relative;
        display: inline-flex;
        align-items: center;
        height: 100%;
      }
      
      .search-popup {
        position: absolute;
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
        margin-right: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        padding: 0 8px;
        width: 180px;
        max-width: calc(100vw - 80px);
        z-index: 10;
        animation: slideInFromRight 0.2s ease-out;
        height: 32px;
        display: flex;
        align-items: center;
      }
    `;
    
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
      // Clear any pending timers
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
  
  // Helper function to check if credentials exist for a URL
  const hasCredentials = (url) => {
    return linksWithCredentials.has(url);
  };
  
  return (
    <div style={{ background: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
      <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>Live Preview</h2>
      <div 
        className="preview-container"
        style={{
        backgroundImage: themes[selectedTheme].gradient,
        color: themes[selectedTheme].colors.text,
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative',
        minHeight: '500px',
      }}>
        {/* Search Ribbon */}
        <div style={{
          padding: '8px 15px',
          background: selectedTheme === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.05)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: `1px solid ${selectedTheme === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.05)'}`
        }}>
          <div style={{ fontWeight: 500, fontSize: '0.9em', opacity: 0.8 }}>
            {headerTitle}
          </div>
          <div 
            ref={searchRef}
            className="search-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ height: '32px', display: 'flex', alignItems: 'center' }}
          >
            <div 
              style={{
                background: showSearch ? (selectedTheme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)') : 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.1em',
                color: themes[selectedTheme].colors.text,
                opacity: showSearch ? 1 : 0.8,
                padding: '6px 8px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              title="Search"
            >
              🔍
            </div>
            
            {/* Search Popup */}
            {showSearch && (
              <div 
                className="search-popup"
                style={{
                  background: selectedTheme === 'dark' 
                    ? 'rgba(255, 255, 255, 0.1)' 
                    : 'rgba(255, 255, 255, 0.9)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  backdropFilter: 'blur(8px)',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 8px'
                }}
              >
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search bookmarks..."
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '4px 8px',
                    border: `1px solid ${selectedTheme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'}`,
                    borderRadius: '6px',
                    background: selectedTheme === 'dark' ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.7)',
                    color: selectedTheme === 'dark' ? '#e2e8f0' : '#334155',
                    transition: 'all 0.2s ease',
                    fontSize: '0.85em',
                    height: '24px',
                    margin: 0
                  }}
                  autoFocus
                />
              </div>
            )}
          </div>
        </div>
        
        <div style={{ padding: '20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.5em', marginBottom: '10px' }}>{pageTitle}</h3>
            {/* Render clocks widget(s) */}
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 8 }}>
              {widgets?.filter(w => w.type === 'clocks')?.map((w) => (
                <div key={w.id} style={{ display: 'flex', gap: 10, padding: 12, borderRadius: 12, background: '#0f172a', color: 'white', boxShadow: '0 6px 18px rgba(0,0,0,0.2)' }}>
                  {w.zones?.map((z) => (
                    <div key={z.id} style={{ minWidth: 110, textAlign: 'center' }}>
                      <div style={{ fontSize: '1.2em', fontWeight: 700 }}>{new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: z.tz }).format(new Date())}</div>
                      <div style={{ fontSize: '0.85em', opacity: 0.85 }}>
                        {z.label?.length ? z.label : (z.tz === 'America/Chicago' ? 'Minneapolis, MN' : z.tz)}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            {safeCategories.length === 0 && <div style={{ color: '#888', marginBottom: 12 }}>No categories yet.</div>}
            {safeCategories.map((category) => (
              <div key={category?.id ?? Math.random()} style={{
                background: selectedTheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)',
                borderRadius: '8px',
                padding: '15px'
              }}>
                <h4 style={{
                  marginBottom: '10px',
                  color: getCategoryHeaderColor(selectedTheme),
                  fontSize: '1em'
                }}>{category?.name ?? ''}</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {(Array.isArray(category?.links) ? category.links : [])
                    .filter(link => !searchTerm || link.name.toLowerCase().includes(searchTerm.toLowerCase()) || link.url.toLowerCase().includes(searchTerm.toLowerCase()))
                    .slice(0, 4).map((link) => (
                    <div key={link?.id ?? Math.random()} style={{
                      background: getLinkBackgroundColor(selectedTheme),
                      color: getLinkTextColor(selectedTheme),
                      padding: '6px 10px',
                      borderRadius: '4px',
                      borderLeft: `3px solid ${getLinkBorderColor(selectedTheme)}`,
                      fontSize: '0.8em'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{link?.name ?? ''}</span>
                        <div>
                          {link?.url && (
                            <button 
                              onClick={() => openCredentialsForLink && openCredentialsForLink(link)} 
                              style={{ 
                                background: hasCredentials(link.url) ? 'transparent' : (selectedTheme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.05)'),
                                border: hasCredentials(link.url) ? 'none' : `1px solid ${selectedTheme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'}`,
                                borderRadius: '3px',
                                padding: hasCredentials(link.url) ? '0' : '2px 4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                              }} 
                              title={hasCredentials(link.url) ? "View credentials" : "No credentials stored"}
                            >
                              <span style={{
                                fontSize: '0.9em',
                                color: hasCredentials(link.url) 
                                  ? getLinkTextColor(selectedTheme) 
                                  : selectedTheme === 'dark' ? 'rgba(150, 150, 150, 0.6)' : 'rgba(100, 100, 100, 0.5)',
                                opacity: hasCredentials(link.url) ? 1 : 0.6,
                                filter: hasCredentials(link.url) ? 'none' : 'grayscale(70%)',
                                textShadow: selectedTheme === 'dark' && !hasCredentials(link.url) ? '0 0 4px rgba(255,255,255,0.2)' : 'none'
                              }}>
                                🔒
                              </span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  {(Array.isArray(category?.links) && category.links.length > 4) && (
                    <div style={{ fontSize: '0.7em', opacity: 0.7, textAlign: 'center' }}>+{category.links.length - 4} more</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkPreview;

BookmarkPreview.propTypes = {
  pageTitle: PropTypes.string,
  headerTitle: PropTypes.string,
  categories: PropTypes.array,
  selectedTheme: PropTypes.string,
  themes: PropTypes.object,
  getCategoryHeaderColor: PropTypes.func,
  getLinkBackgroundColor: PropTypes.func,
  getLinkTextColor: PropTypes.func,
  getLinkBorderColor: PropTypes.func,
  openCredentialsForLink: PropTypes.func,
  widgets: PropTypes.array,
  linksWithCredentials: PropTypes.instanceOf(Set)
};