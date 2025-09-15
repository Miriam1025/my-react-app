import React, { useState } from 'react';

function BookmarkBuilder() {
  const [selectedTheme, setSelectedTheme] = useState('corporate');
  const [pageTitle, setPageTitle] = useState('My Bookmarks');
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Work',
      links: [
        { name: 'Gmail', url: 'https://gmail.com' },
        { name: 'Calendar', url: 'https://calendar.google.com' }
      ]
    }
  ]);

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

  const addLink = (categoryId) => {
    setCategories(categories.map(cat => 
      cat.id === categoryId 
        ? { ...cat, links: [...cat.links, { name: 'New Link', url: 'https://' }] }
        : cat
    ));
  };

  const updateCategory = (categoryId, newName) => {
    setCategories(categories.map(cat => 
      cat.id === categoryId ? { ...cat, name: newName } : cat
    ));
  };

  const updateLink = (categoryId, linkIndex, field, value) => {
    setCategories(categories.map(cat => 
      cat.id === categoryId 
        ? {
            ...cat, 
            links: cat.links.map((link, index) => 
              index === linkIndex ? { ...link, [field]: value } : link
            )
          }
        : cat
    ));
  };

  const deleteLink = (categoryId, linkIndex) => {
    setCategories(categories.map(cat => 
      cat.id === categoryId 
        ? { ...cat, links: cat.links.filter((_, index) => index !== linkIndex) }
        : cat
    ));
  };

  const deleteCategory = (categoryId) => {
    setCategories(categories.filter(cat => cat.id !== categoryId));
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
            color: ${selectedTheme === 'minimal' ? '#333' : selectedTheme === 'dark' ? '#fbbf24' : theme.colors.primary};
        }
        
        .links {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        
        .link {
            display: block;
            padding: 12px 16px;
            background: ${selectedTheme === 'dark' ? 'rgba(51, 65, 85, 0.8)' : 'rgba(255, 255, 255, 0.7)'};
            color: ${selectedTheme === 'minimal' || selectedTheme === 'corporate' ? '#333' : '#fff'};
            text-decoration: none;
            border-radius: 8px;
            border-left: 4px solid ${selectedTheme === 'dark' ? '#fbbf24' : theme.colors.primary};
            transition: all 0.3s ease;
        }
        
        .link:hover {
            transform: translateX(5px);
            background: ${selectedTheme === 'dark' ? 'rgba(51, 65, 85, 1)' : 'rgba(255, 255, 255, 1)'};
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
            <input 
                type="text" 
                id="searchInput" 
                class="search-box" 
                placeholder="Search your bookmarks..." 
                onkeyup="searchLinks()"
            >
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
          
          {/* Builder Panel */}
          <div style={{ background: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '30px', color: '#2c3e50' }}>Build Your Page</h2>
            
            {/* Page Title */}
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#333' }}>Page Title:</label>
              <input
                type="text"
                value={pageTitle}
                onChange={(e) => setPageTitle(e.target.value)}
                style={{ width: '100%', padding: '12px', border: '2px solid #e0e0e0', borderRadius: '8px', fontSize: '1em' }}
                placeholder="My Awesome Bookmarks"
              />
            </div>

            {/* Theme Selection */}
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '15px', fontWeight: 600, color: '#333' }}>Choose Theme:</label>
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

            {/* Categories */}
            <div style={{ marginBottom: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <label style={{ fontWeight: 600, color: '#333' }}>Categories & Links:</label>
                <button
                  onClick={addCategory}
                  style={{ background: '#4ade80', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}
                >
                  + Add Category
                </button>
              </div>

              {categories.map((category) => (
                <div key={category.id} style={{ border: '2px solid #e0e0e0', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                    <input
                      type="text"
                      value={category.name}
                      onChange={(e) => updateCategory(category.id, e.target.value)}
                      style={{ flex: 1, padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                      placeholder="Category Name"
                    />
                    <button
                      onClick={() => addLink(category.id)}
                      style={{ background: '#667eea', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}
                    >
                      + Link
                    </button>
                    {categories.length > 1 && (
                      <button
                        onClick={() => deleteCategory(category.id)}
                        style={{ background: '#ef4444', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}
                      >
                        Delete
                      </button>
                    )}
                  </div>

                  {category.links.map((link, linkIndex) => (
                    <div key={linkIndex} style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                      <input
                        type="text"
                        placeholder="Link Name"
                        value={link.name}
                        onChange={(e) => updateLink(category.id, linkIndex, 'name', e.target.value)}
                        style={{ flex: 1, padding: '6px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.9em' }}
                      />
                      <input
                        type="url"
                        placeholder="https://example.com"
                        value={link.url}
                        onChange={(e) => updateLink(category.id, linkIndex, 'url', e.target.value)}
                        style={{ flex: 2, padding: '6px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.9em' }}
                      />
                      <button
                        onClick={() => deleteLink(category.id, linkIndex)}
                        style={{ background: '#ef4444', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8em' }}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Generate Button */}
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
            >
              📥 Download Your Bookmark Page
            </button>

            {/* Instructions */}
            <div style={{ marginTop: '20px', padding: '15px', background: '#f0f9ff', borderRadius: '8px', border: '1px solid #e0f2fe' }}>
              <h3 style={{ fontSize: '1em', marginBottom: '10px', color: '#0369a1' }}>How to use your bookmark page:</h3>
              <ol style={{ fontSize: '0.9em', color: '#374151', lineHeight: 1.6, paddingLeft: '20px' }}>
                <li>Click "Download Your Bookmark Page" above</li>
                <li>Find the downloaded HTML file (usually in Downloads folder)</li>
                <li>Double-click the file to open it in your browser</li>
                <li>Bookmark the page in your browser for easy access</li>
                <li>Enjoy your organized, beautiful bookmark page!</li>
              </ol>
            </div>
          </div>

          {/* Preview Panel */}
          <div style={{ background: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>Live Preview</h2>
            <div style={{
              background: themes[selectedTheme].gradient,
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
                      color: selectedTheme === 'minimal' ? '#333' : selectedTheme === 'dark' ? '#fbbf24' : themes[selectedTheme].colors.primary,
                      fontSize: '1em'
                    }}>
                      {category.name}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {category.links.slice(0, 4).map((link, index) => (
                        <div key={index} style={{
                          background: selectedTheme === 'dark' ? 'rgba(51,65,85,0.8)' : 'rgba(255,255,255,0.7)',
                          color: selectedTheme === 'minimal' || selectedTheme === 'corporate' ? '#333' : '#fff',
                          padding: '6px 10px',
                          borderRadius: '4px',
                          borderLeft: `3px solid ${selectedTheme === 'dark' ? '#fbbf24' : themes[selectedTheme].colors.primary}`,
                          fontSize: '0.8em'
                        }}>
                          {link.name}
                        </div>
                      ))}
                      {category.links.length > 4 && (
                        <div style={{ fontSize: '0.7em', opacity: 0.7, textAlign: 'center' }}>
                          +{category.links.length - 4} more
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookmarkBuilder;