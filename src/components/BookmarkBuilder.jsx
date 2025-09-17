  // Add a category to a group
  const addCategoryToGroup = (groupId) => {
    setGroups(groups.map(group =>
      group.id === groupId
        ? {
            ...group,
            categories: [
              ...group.categories,
              { id: Date.now(), name: `New Category ${group.categories.length + 1}` }
            ]
          }
        : group
    ));
  };
  // Add a new group
  const addGroup = () => {
    const newGroup = {
      id: Date.now(),
      name: `New Group ${groups.length + 1}`,
      categories: []
    };
    setGroups([...groups, newGroup]);
  };
import React, { useState } from 'react';
import CredentialsPopup from './CredentialsPopup';
import AddCredentialsModal from './CredentialsPopup/AddCredentialsModal';
import PageSettings from './BookmarkBuilder/PageSettings';
import CategoryGroupsEditor from './BookmarkBuilder/CategoryGroupsEditor';
import CategoryEditor from './BookmarkBuilder/CategoryEditor';
import LivePreview from './BookmarkBuilder/LivePreview';

function BookmarkBuilder() {
  const [selectedTheme, setSelectedTheme] = useState('corporate');
  const [pageTitle, setPageTitle] = useState('My Bookmarks');
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Work',
      links: [
        { id: 1001, name: 'Gmail', url: 'https://gmail.com' },
        { id: 1002, name: 'Calendar', url: 'https://calendar.google.com' }
      ]
    }
  ]);
  // New: State for category groups
  const [groups, setGroups] = useState([]);

  // Credentials popup state (local demo integration)
  const [isCredPopupOpen, setIsCredPopupOpen] = useState(false);
  const [activeCredentials, setActiveCredentials] = useState(null);
  const [activeLinkUrl, setActiveLinkUrl] = useState(null);
  const [showAddCredModalFor, setShowAddCredModalFor] = useState(null);
  const [widgets, setWidgets] = useState([]);

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
    },
    minimal: {
      name: 'Minimalist White',
      colors: { primary: '#f8f9fa', secondary: '#ffffff', text: '#333' },
      gradient: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'
    },
    sunset: {
      name: 'Sunset Gradient',
      colors: { primary: '#667eea', secondary: '#f093fb', text: '#fff' },
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 100%)'
    }
  };

  const addCategory = () => {
    setCategories([...categories, {
      id: Date.now(),
      name: 'New Category',
      links: []
    }]);
  };

  const addWidget = () => {
    setWidgets([...widgets, { id: Date.now() + Math.random(), type: 'search', label: '' }]);
  };

  const removeWidget = (id) => {
    setWidgets(widgets.filter(w => w.id !== id));
  };

  const updateWidget = (id, newWidget) => {
    setWidgets(widgets.map(w => w.id === id ? newWidget : w));
  };

  const addLink = (categoryId) => {
    setCategories(categories.map(cat => 
      cat.id === categoryId 
        ? { ...cat, links: [...cat.links, { id: Date.now() + Math.random(), name: 'New Link', url: 'https://' }] }
        : cat
    ));
  };

  const updateCategory = (categoryId, newName) => {
    setCategories(categories.map(cat => 
      cat.id === categoryId ? { ...cat, name: newName } : cat
    ));
  };

  const updateLink = (categoryId, linkId, field, value) => {
    setCategories(categories.map(cat => 
      cat.id === categoryId 
        ? {
            ...cat, 
            links: cat.links.map((link) => 
              link.id === linkId ? { ...link, [field]: value } : link
            )
          }
        : cat
    ));
  };

  const deleteLink = (categoryId, linkId) => {
    setCategories(categories.map(cat => 
      cat.id === categoryId 
        ? { ...cat, links: cat.links.filter((link) => link.id !== linkId) }
        : cat
    ));
  };

  const openCredentialsForLink = (link) => {
    // Do not store demo credentials in code: just open popup and let it attempt to load encrypted credentials for the URL on PIN entry.
    setActiveCredentials(null);
    setActiveLinkUrl(link.url);
    setIsCredPopupOpen(true);
  };

  const openAddCreds = (link) => {
    setShowAddCredModalFor(link);
  };

  const handleSaveCredentials = async () => {
    // The modal's form handles saving; this placeholder can be used for callbacks
    setShowAddCredModalFor(null);
  };

  const closeCredPopup = () => {
    setIsCredPopupOpen(false);
    setActiveCredentials(null);
    setActiveLinkUrl(null);
  };

  const deleteCategory = (categoryId) => {
    setCategories(categories.filter(cat => cat.id !== categoryId));
  };

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

  const getLinkHoverColor = (theme) => {
    return theme === 'dark' ? 'rgba(51, 65, 85, 1)' : 'rgba(255, 255, 255, 1)';
  };

  const getLinkBorderColor = (theme) => {
    return theme === 'dark' ? '#fbbf24' : themes[theme].colors.primary;
  };

  const generateHTML = () => {
    const theme = themes[selectedTheme];
    
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: ${theme.gradient};
            color: ${theme.colors.text};
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .header {
            text-align: center;
            margin-bottom: 40px;
        }
        
        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
            ${selectedTheme === 'minimal' ? 'color: #333;' : ''}
        }
        
        .search-box {
            width: 100%;
            max-width: 500px;
            padding: 15px;
            border: none;
            border-radius: 25px;
            font-size: 1em;
            margin: 20px auto;
            display: block;
            background: rgba(255, 255, 255, 0.9);
            color: #333;
        }
        
        .categories {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }
        
        .category {
            background: rgba(255, 255, 255, ${selectedTheme === 'dark' ? '0.1' : '0.9'});
            border-radius: 15px;
            padding: 25px;
            backdrop-filter: blur(10px);
        }
        
        .category h2 {
            font-size: 1.3em;
            margin-bottom: 20px;
            color: ${getCategoryHeaderColor(selectedTheme)};
        }
        
        .links {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        
        .link {
            display: block;
            padding: 12px 16px;
            background: ${getLinkBackgroundColor(selectedTheme)};
            color: ${getLinkTextColor(selectedTheme)};
            text-decoration: none;
            border-radius: 8px;
            border-left: 4px solid ${getLinkBorderColor(selectedTheme)};
            transition: all 0.3s ease;
        }
        
        .link:hover {
            transform: translateX(5px);
            background: ${getLinkHoverColor(selectedTheme)};
        }
        
        .footer {
            text-align: center;
            margin-top: 60px;
            opacity: 0.7;
            font-size: 0.9em;
        }
        
        @media (max-width: 768px) {
            .categories {
                grid-template-columns: 1fr;
            }
            .header h1 {
                font-size: 2em;
            }
        }
    </style>
    <script>
        function searchLinks() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            const links = document.querySelectorAll('.link');
            
            links.forEach(link => {
                const text = link.textContent.toLowerCase();
                if (text.includes(query)) {
                    link.style.display = 'block';
                } else {
                    link.style.display = 'none';
                }
            });
        }
    </script>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>${pageTitle}</h1>
      ${widgets.map(w => {
        if (w.type === 'search') return `<input type="text" id="searchInput" class="search-box" placeholder="${(w.label || 'Search your bookmarks...')}" onkeyup="searchLinks()">`;
        if (w.type === 'featured') return `<div style="margin-top:12px;"><a href="#" class="link featured">${(w.label || 'Featured Link')}</a></div>`;
        if (w.type === 'clocks') {
          // build clocks markup without nested template literals for lint friendliness
          const clockBits = (w.zones || []).map(z => {
            const timeStr = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: z.tz });
            const label = z.label?.length ? z.label : z.tz;
            return `<div style="min-width:110px; text-align:center;"><div style="font-size:1.2em; font-weight:700;">${timeStr}</div><div style="font-size:0.85em; opacity:0.85;">${label}</div></div>`;
          }).join('');
          return `<div style="display:flex; gap:12px; margin-top:12px; background:#0f172a; color:white; padding:12px; border-radius:12px; box-shadow:0 6px 18px rgba(0,0,0,0.15);">${clockBits}</div>`;
        }
        return `<div style="margin-top:12px; font-size:0.95em; color:#333;">${(w.label || '')}</div>`;
      }).join('')}
        </div>
        
        <div class="categories">
            ${categories.map(category => `
                <div class="category">
                    <h2>${category.name}</h2>
                    <div class="links">
                        ${category.links.map(link => `
                            <a href="${link.url}" class="link" target="_blank">${link.name}</a>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div class="footer">
            <p>Created with Timeless Links Bookmark Builder</p>
        </div>
    </div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${pageTitle.replace(/\s+/g, '_').toLowerCase()}_bookmarks.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Welcome Message */}
      <div style={{ 
        background: '#4ade80', 
        color: 'white', 
        padding: '15px', 
        textAlign: 'center',
        fontSize: '1.1em',
        fontWeight: '600'
      }}>
        🎉 Welcome! Your purchase was successful. Start building your bookmark page below.
      </div>

      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5em', marginBottom: '10px' }}>Bookmark Page Builder</h1>
        <p style={{ fontSize: '1.1em', opacity: 0.9 }}>Create your personalized bookmark page in minutes</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '40px' }}>
          
          <div style={{ background: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <PageSettings pageTitle={pageTitle} setPageTitle={setPageTitle} selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} themes={themes} widgets={widgets} addWidget={addWidget} removeWidget={removeWidget} updateWidget={updateWidget} />
            <div style={{ marginTop: 12 }}>
              <CategoryGroupsEditor
                groups={groups}
                addGroup={addGroup}
                updateGroup={(groupId, newName) => {
                  setGroups(groups.map(group =>
                    group.id === groupId ? { ...group, name: newName } : group
                  ));
                }}
                deleteGroup={(groupId) => {
                  setGroups(groups.filter(group => group.id !== groupId));
                }}
                addCategoryToGroup={addCategoryToGroup}
                removeCategoryFromGroup={(groupId, categoryId) => {
                  setGroups(groups.map(group =>
                    group.id === groupId
                      ? {
                          ...group,
                          categories: group.categories.filter(cat => cat.id !== categoryId)
                        }
                      : group
                  ));
                }}
              />
              <CategoryEditor
                categories={categories}
                addCategory={addCategory}
                updateCategory={updateCategory}
                deleteCategory={deleteCategory}
              />
            </div>
            <div style={{ marginTop: 12 }}>
              <button
                onClick={generateHTML}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '15px',
                  borderRadius: '10px',
                  fontSize: '1.1em',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                onFocus={(e) => e.target.style.transform = 'translateY(-2px)'}
                onBlur={(e) => e.target.style.transform = 'translateY(0)'}
              >
                📥 Download Your Bookmark Page
              </button>
            </div>
          </div>

          <LivePreview
            pageTitle={pageTitle}
            categories={categories}
            selectedTheme={selectedTheme}
            themes={themes}
            getCategoryHeaderColor={getCategoryHeaderColor}
            getLinkBackgroundColor={getLinkBackgroundColor}
            getLinkTextColor={getLinkTextColor}
            getLinkBorderColor={getLinkBorderColor}
            openCredentialsForLink={openCredentialsForLink}
            openAddCreds={openAddCreds}
            widgets={widgets}
          />
        </div>
      </div>
    </div>
    {/* Credentials popup — mounted so it shows after deployment when triggered */}
    <AddCredentialsModal
      isOpen={!!showAddCredModalFor}
      onClose={() => setShowAddCredModalFor(null)}
      onSave={handleSaveCredentials}
      defaultUrl={showAddCredModalFor ? showAddCredModalFor.url : ''}
    />
    <CredentialsPopup
      isOpen={isCredPopupOpen}
      onClose={closeCredPopup}
      linkUrl={activeLinkUrl}
      credentials={activeCredentials || {}}
    />
    </>
  );
}

export default BookmarkBuilder;