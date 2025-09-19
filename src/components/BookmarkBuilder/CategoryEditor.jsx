import React from 'react';
import PropTypes from 'prop-types';

const CategoryEditor = ({
  categories,
  addCategory,
  updateCategory,
  deleteCategory,
  addLink,
  updateLink,
  deleteLink,
  openAddCreds
}) => {
  const safeCategories = Array.isArray(categories) ? categories : [];
  return (
    <div>
      <div style={{ fontWeight: 600, marginBottom: '10px' }}>Categories:</div>
      {safeCategories.length === 0 && <div style={{ color: '#888', marginBottom: 12 }}>No categories yet.</div>}
      {safeCategories.map((category) => (
        <div key={category?.id ?? Math.random()} style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '18px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <input
              type="text"
              value={category?.name ?? ''}
              onChange={(e) => updateCategory && updateCategory(category.id, e.target.value)}
              style={{ flex: 1, padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
              placeholder="Category Name"
            />
            <button
              onClick={() => deleteCategory && deleteCategory(category.id)}
              style={{ background: '#f3f4f6', color: '#333', border: '1px solid #ddd', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Remove
            </button>
          </div>
          <div style={{ marginLeft: 0, marginTop: 8 }}>
            <div style={{ fontWeight: 500, marginBottom: 6 }}>Links:</div>
            {category.links && category.links.length > 0 && category.links.map((link) => (
              <div key={link.id} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: 6 }}>
                <input
                  type="text"
                  value={link.name}
                  onChange={(e) => updateLink && updateLink(category.id, link.id, 'name', e.target.value)}
                  style={{ flex: 1, padding: '6px', border: '1px solid #ddd', borderRadius: '4px' }}
                  placeholder="Link Name"
                />
                <input
                  type="text"
                  value={link.url}
                  onChange={(e) => updateLink && updateLink(category.id, link.id, 'url', e.target.value)}
                  style={{ flex: 2, padding: '6px', border: '1px solid #ddd', borderRadius: '4px' }}
                  placeholder="URL"
                />
                <button
                  onClick={() => deleteLink && deleteLink(category.id, link.id)}
                  style={{ background: '#f3f4f6', color: '#333', border: '1px solid #ddd', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Remove
                </button>
                <button
                  onClick={() => typeof openAddCreds === 'function' && openAddCreds(link)}
                  style={{ background: '#e0e7ff', color: '#2563eb', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', marginLeft: '4px' }}
                >
                  Add Credentials
                </button>
              </div>
            ))}
            <button
              onClick={() => addLink && addLink(category.id)}
              style={{ background: '#e0e7ff', color: '#2563eb', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', marginTop: 6 }}
            >
              + Add Link
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={typeof addCategory === 'function' ? addCategory : undefined}
        style={{ background: '#667eea', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
      >
        + Add Category
      </button>
    </div>
  );
};

CategoryEditor.propTypes = {
  categories: PropTypes.array,
  addCategory: PropTypes.func,
  updateCategory: PropTypes.func,
  deleteCategory: PropTypes.func,
  addLink: PropTypes.func,
  updateLink: PropTypes.func,
  deleteLink: PropTypes.func,
  openAddCreds: PropTypes.func
};

export default CategoryEditor;
