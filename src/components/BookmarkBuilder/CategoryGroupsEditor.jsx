import React from 'react';
import PropTypes from 'prop-types';

const CategoryGroupsEditor = ({
  groups,
  addGroup,
  updateGroup,
  deleteGroup,
  addCategoryToGroup,
  removeCategoryFromGroup,
  selectedGroupId,
  setSelectedGroupId
}) => {
  // Defensive: always use array
  const safeGroups = Array.isArray(groups) ? groups : [];
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
  <div style={{ fontWeight: 600, color: '#333' }}>Groups:</div>
        <button
          onClick={typeof addGroup === 'function' ? addGroup : undefined}
          style={{ background: '#4ade80', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}
        >
          + Add Group
        </button>
      </div>
      {safeGroups.length === 0 && <div style={{ color: '#888', marginBottom: 12 }}>No groups yet.</div>}
      {safeGroups.map((group) => (
        <button
          key={group?.id ?? Math.random()}
          style={{
            border: '2px solid #e0e0e0',
            borderRadius: '10px',
            padding: '20px',
            marginBottom: '20px',
            background: group.id === selectedGroupId ? '#e0f7fa' : 'white',
            cursor: 'pointer',
            width: '100%',
            textAlign: 'left',
            display: 'block'
          }}
          onClick={() => setSelectedGroupId?.(group.id)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setSelectedGroupId?.(group.id);
            }
          }}
        >
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <input
              type="text"
              value={group?.name ?? ''}
              onChange={(e) => updateGroup?.(group.id, e.target.value)}
              style={{ flex: 1, padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
              placeholder="Group Name"
            />
            <button
              onClick={(e) => { e.stopPropagation(); deleteGroup?.(group.id); }}
              style={{ background: '#ef4444', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Delete Group
            </button>
          </div>
          {/* Only show categories for selected group */}
          {group.id === selectedGroupId && (
            <div>
              <div style={{ fontWeight: 600, marginBottom: '10px' }}>Categories:</div>
              {(Array.isArray(group?.categories) ? group.categories : []).map((category) => (
                <div key={category?.id ?? Math.random()} style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                  <span style={{ flex: 1 }}>{category?.name ?? ''}</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); removeCategoryFromGroup?.(group.id, category.id); }}
                    style={{ background: '#ef4444', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={(e) => { e.stopPropagation(); addCategoryToGroup?.(group.id); }}
                style={{ background: '#667eea', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
              >
                + Add Category
              </button>
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

CategoryGroupsEditor.propTypes = {
  groups: PropTypes.array,
  addGroup: PropTypes.func,
  updateGroup: PropTypes.func,
  deleteGroup: PropTypes.func,
  addCategoryToGroup: PropTypes.func,
  removeCategoryFromGroup: PropTypes.func,
  selectedGroupId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  setSelectedGroupId: PropTypes.func
};

export default CategoryGroupsEditor;
     