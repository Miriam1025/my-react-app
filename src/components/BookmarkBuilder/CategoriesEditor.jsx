import React from 'react';
import PropTypes from 'prop-types';
import CategoryGroupsEditor from './CategoryGroupsEditor';

const CategoriesEditor = ({
  groups,
  addGroup,
  updateGroup,
  deleteGroup,
  addCategoryToGroup,
  removeCategoryFromGroup
}) => {
  return (
    <div>
      <CategoryGroupsEditor
        groups={groups}
        addGroup={addGroup}
        updateGroup={updateGroup}
        deleteGroup={deleteGroup}
        addCategoryToGroup={addCategoryToGroup}
        removeCategoryFromGroup={removeCategoryFromGroup}
      />
    </div>
  );
};

CategoriesEditor.propTypes = {
  groups: PropTypes.array.isRequired,
  addGroup: PropTypes.func.isRequired,
  updateGroup: PropTypes.func.isRequired,
  deleteGroup: PropTypes.func.isRequired,
  addCategoryToGroup: PropTypes.func.isRequired,
  removeCategoryFromGroup: PropTypes.func.isRequired
};

export default CategoriesEditor;
