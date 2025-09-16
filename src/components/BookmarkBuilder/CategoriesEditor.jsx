import React from 'react';

const CategoriesEditor = ({ categories, addCategory, addLink, updateCategory, updateLink, deleteCategory, deleteLink, openAddCreds, openCredentialsForLink }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ fontWeight: 600, color: '#333' }}>Categories & Links:</div>
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
            <label htmlFor={`category-${category.id}`} className="sr-only">Category Name</label>
            <input
              id={`category-${category.id}`}
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

          {category.links.map((link) => (
            <div key={link.id} style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
              <label htmlFor={`link-name-${link.id}`} className="sr-only">Link Name</label>
              <input
                id={`link-name-${link.id}`}
                type="text"
                placeholder="Link Name"
                value={link.name}
                onChange={(e) => updateLink(category.id, link.id, 'name', e.target.value)}
                style={{ flex: 1, padding: '6px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.9em' }}
              />
              <label htmlFor={`link-url-${link.id}`} className="sr-only">Link URL</label>
              <input
                id={`link-url-${link.id}`}
                type="url"
                placeholder="https://example.com"
                value={link.url}
                onChange={(e) => updateLink(category.id, link.id, 'url', e.target.value)}
                style={{ flex: 2, padding: '6px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.9em' }}
              />
              <button
                onClick={() => deleteLink(category.id, link.id)}
                style={{ background: '#ef4444', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8em' }}
              >
                ×
              </button>
              <button
                onClick={() => openCredentialsForLink(link)}
                style={{ background: '#0ea5a4', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8em' }}
                title="View stored credentials (demo)"
              >
                🔒
              </button>
              <button
                onClick={() => openAddCreds(link)}
                style={{ background: 'transparent', border: 'none', color: '#374151', cursor: 'pointer', fontSize: '0.9em', marginLeft: '6px' }}
                title="Add credentials for this link"
              >
                ➕
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CategoriesEditor;
