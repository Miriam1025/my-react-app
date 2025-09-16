// src/App.jsx
import React, { useState } from 'react';
import CredentialsPopup from './components/CredentialsPopup';
import './App.css';

function App() {
  const [showCredentials, setShowCredentials] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  // Sample data with credentials - you can replace this with your actual data
  const sampleLinks = [
    {
      id: 1,
      title: "Gmail",
      url: "https://gmail.com",
      description: "Primary email for work and personal communication",
      category: "Work & Productivity",
      credentials: {
        username: "john.doe@gmail.com",
        password: "mySecurePassword123",
        notes: "Work email account"
      }
    },
    {
      id: 2,
      title: "GitHub", 
      url: "https://github.com",
      description: "Code repositories, version control, and collaborative development",
      category: "Development",
      credentials: {
        username: "johndoe",
        password: "github_token_abc123"
      }
    },
    {
      id: 3,
      title: "Netflix",
      url: "https://netflix.com",
      description: "Streaming service for movies, TV shows, and documentaries",
      category: "Entertainment",
      credentials: {
        username: "john.doe@gmail.com",
        password: "netflix_pass_456"
      }
    },
    {
      id: 4,
      title: "Stack Overflow",
      url: "https://stackoverflow.com",
      description: "Programming questions, answers, and community help",
      category: "Development"
      // No credentials for this one
    }
  ];

  const handleCredentialsClick = (link) => {
    setSelectedLink(link);
    setShowCredentials(true);
  };

  const handleCloseCredentials = () => {
    setShowCredentials(false);
    setSelectedLink(null);
  };

  // Group links by category
  const linksByCategory = sampleLinks.reduce((acc, link) => {
    const category = link.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(link);
    return acc;
  }, {});

  return (
    <div className="app">
      <div className="app-header">
        <h1>🔗 My Personal Bookmarks</h1>
        <p className="app-subtitle">Organized links with secure credential storage</p>
      </div>

      <div className="app-content">
        {Object.entries(linksByCategory).map(([category, links]) => (
          <div key={category} className="category-section">
            <h2 className="category-title">
              {getCategoryIcon(category)} {category}
            </h2>
            
            <div className="links-grid">
              {links.map(link => (
                <div key={link.id} className="link-card">
                  <div className="link-card__content">
                    <h3 className="link-card__title">
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.title}
                      </a>
                    </h3>
                    
                    <p className="link-card__description">
                      {link.description}
                    </p>
                    
                    <div className="link-card__url">
                      {getDomainFromUrl(link.url)}
                    </div>
                  </div>

                  <div className="link-card__actions">
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="link-card__visit-btn"
                    >
                      🌐 Visit
                    </a>
                    
                    {/* Show credentials button only if credentials exist */}
                    {hasCredentials(link.credentials) && (
                      <button
                        onClick={() => handleCredentialsClick(link)}
                        className="link-card__credentials-btn"
                        title="View stored credentials"
                      >
                        🔑 Credentials
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Credentials Popup */}
      <CredentialsPopup
        isOpen={showCredentials}
        onClose={handleCloseCredentials}
        linkUrl={selectedLink?.url}
        credentials={selectedLink?.credentials}
        masterPin="1234" // You can make this configurable
      />
    </div>
  );
}

// Helper functions
function getCategoryIcon(category) {
  const icons = {
    'Work & Productivity': '🏢',
    'Development': '💻',
    'Entertainment': '🎬',
    'Other': '⭐'
  };
  return icons[category] || '📁';
}

function getDomainFromUrl(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

function hasCredentials(credentials) {
  return credentials && (
    (credentials.username && credentials.username.trim().length > 0) ||
    (credentials.password && credentials.password.trim().length > 0)
  );
}

export default App;