import React, { useState } from 'react';
import LivePreviewNew from './BookmarkBuilder/LivePreviewNew';

function TestLivePreview() {
  // Setup test data similar to what's in BookmarkBuilder
  const [selectedTheme, setSelectedTheme] = useState('corporate');
  const pageTitle = 'Test Bookmarks';
  const headerTitle = 'Test Header';
  const [linksWithCredentials, setLinksWithCredentials] = useState(new Set(['https://gmail.com']));
  
  const themes = {
    corporate: {
      name: 'Corporate Blue',
      colors: { primary: '#1e3c72', secondary: '#2a5298', text: '#fff' },
      gradient: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'
    },
    dark: {
      name: 'Executive Dark',
      colors: { primary: '#0f172a', secondary: '#1e293b', text: '#fff' },
      gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
    }
  };

  const categories = [
    {
      id: 1,
      name: 'Work',
      links: [
        { id: 1001, name: 'Gmail', url: 'https://gmail.com' },
        { id: 1002, name: 'Calendar', url: 'https://calendar.google.com' }
      ]
    },
    {
      id: 2,
      name: 'Personal',
      links: [
        { id: 2001, name: 'Facebook', url: 'https://facebook.com' },
        { id: 2002, name: 'Twitter', url: 'https://twitter.com' }
      ]
    }
  ];

  const widgets = [
    { 
      id: 1, 
      type: 'clocks', 
      zones: [
        { id: 101, tz: 'America/New_York', label: 'New York' },
        { id: 102, tz: 'America/Chicago', label: 'Chicago' }
      ] 
    }
  ];

  const getCategoryHeaderColor = (theme) => {
    if (theme === 'minimal') return '#333';
    if (theme === 'dark') return '#fbbf24';
    return themes[theme].colors.primary;
  };

  const getLinkBackgroundColor = (theme) => {
    return theme === 'dark' ? 'rgba(51, 65, 85, 0.8)' : 'rgba(255, 255, 255, 0.7)';
  };

  const getLinkTextColor = (theme) => {
    return (theme === 'minimal' || theme === 'corporate') ? '#333' : '#fff';
  };

  const getLinkBorderColor = (theme) => {
    return theme === 'dark' ? '#fbbf24' : themes[theme].colors.primary;
  };

  const openCredentialsForLink = (link) => {
    alert(`Would open credentials for: ${link.url}`);
  };

  const addTestCredential = () => {
    setLinksWithCredentials(prev => {
      const newSet = new Set(prev);
      newSet.add('https://calendar.google.com');
      return newSet;
    });
  };

  const removeTestCredential = () => {
    setLinksWithCredentials(prev => {
      const newSet = new Set(prev);
      newSet.delete('https://gmail.com');
      return newSet;
    });
  };

  const toggleTheme = () => {
    setSelectedTheme(prev => prev === 'corporate' ? 'dark' : 'corporate');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>LivePreviewNew Test</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={toggleTheme}
          style={{ padding: '8px 16px', marginRight: '10px' }}
        >
          Toggle Theme ({selectedTheme})
        </button>
        
        <button 
          onClick={addTestCredential}
          style={{ padding: '8px 16px', marginRight: '10px' }}
        >
          Add Credential for Calendar
        </button>
        
        <button 
          onClick={removeTestCredential}
          style={{ padding: '8px 16px' }}
        >
          Remove Credential for Gmail
        </button>
      </div>
      
      <div style={{ border: '1px solid #ccc', padding: '10px' }}>
        <LivePreviewNew
          pageTitle={pageTitle}
          headerTitle={headerTitle}
          categories={categories}
          selectedTheme={selectedTheme}
          themes={themes}
          getCategoryHeaderColor={getCategoryHeaderColor}
          getLinkBackgroundColor={getLinkBackgroundColor}
          getLinkTextColor={getLinkTextColor}
          getLinkBorderColor={getLinkBorderColor}
          openCredentialsForLink={openCredentialsForLink}
          widgets={widgets}
          linksWithCredentials={linksWithCredentials}
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Current State:</h3>
        <p>Selected Theme: {selectedTheme}</p>
        <p>Links with Credentials: {Array.from(linksWithCredentials).join(', ')}</p>
      </div>
    </div>
  );
}

export default TestLivePreview;