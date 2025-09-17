import React from 'react';
import PropTypes from 'prop-types';

const CategoryEditor = ({
  categories,
  addCategory,
  updateCategory,
  deleteCategory
}) => {
  return (
    <div>
      <div style={{ fontWeight: 600, marginBottom: '10px' }}>Categories:</div>
      {categories.map((category) => (
        <div key={category.id} style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
          <input
            type="text"
            value={category.name}
            onChange={(e) => updateCategory(category.id, e.target.value)}
            style={{ flex: 1, padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            placeholder="Category Name"
          />
          <button
            onClick={() => deleteCategory(category.id)}
            style={{ background: '#ef4444', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' }}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addCategory}
        style={{ background: '#667eea', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
      >
        + Add Category
      </button>
    </div>
  );
};

CategoryEditor.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  addCategory: PropTypes.func.isRequired,
  updateCategory: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired
};

export default CategoryEditor;
