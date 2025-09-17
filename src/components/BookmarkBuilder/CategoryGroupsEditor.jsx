import React from 'react';
import PropTypes from 'prop-types';

const CategoryGroupsEditor = ({
  groups,
  addGroup,
  updateGroup,
  deleteGroup,
  addCategoryToGroup,
  removeCategoryFromGroup
}) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ fontWeight: 600, color: '#333' }}>Category Groups:</div>
        <button
          onClick={addGroup}
          style={{ background: '#4ade80', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}
        >
          + Add Group
        </button>
      </div>
      {groups.map((group) => (
        <div key={group.id} style={{ border: '2px solid #e0e0e0', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <input
              type="text"
              value={group.name}
              onChange={(e) => updateGroup(group.id, e.target.value)}
              style={{ flex: 1, padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
              placeholder="Group Name"
            />
            <button
              onClick={() => deleteGroup(group.id)}
              style={{ background: '#ef4444', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Delete Group
            </button>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: '10px' }}>Categories:</div>
            {group.categories.map((category) => (
              <div key={category.id} style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                <span style={{ flex: 1 }}>{category.name}</span>
                <button
                  onClick={() => removeCategoryFromGroup(group.id, category.id)}
                  style={{ background: '#ef4444', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={() => addCategoryToGroup(group.id)}
              style={{ background: '#667eea', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
            >
              + Add Category
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

CategoryGroupsEditor.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired
    })).isRequired
  })).isRequired,
  addGroup: PropTypes.func.isRequired,
  updateGroup: PropTypes.func.isRequired,
  deleteGroup: PropTypes.func.isRequired,
  addCategoryToGroup: PropTypes.func.isRequired,
  removeCategoryFromGroup: PropTypes.func.isRequired
};

export default CategoryGroupsEditor;
     