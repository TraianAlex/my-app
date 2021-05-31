import React from 'react';
import { Link } from 'react-router-dom';
import '../members-only.scss';
import { GroupsList } from './GroupsList';
import { GroupsListItem } from './GroupsListItem';
import { MyGroupsListItem } from './MyGroupsListItem';
import { useGroups } from './useGroups';
import { useUserGroups } from './useUserGroups';

export const GroupsListPage = () => {
  const { isLoading: isLoadingAllGroups, groups: allGroups } = useGroups();
  const { isLoading: isLoadingUserGroups, userGroups } = useUserGroups();
  const isLoading = isLoadingAllGroups && isLoadingUserGroups;

  const notUserGroups = allGroups.filter((group) =>
    userGroups.every((userGroup) => userGroup._id !== group._id),
  );

  return (
    <div
      className="d-flex flex-column members-only"
      style={{ minHeight: '75vh' }}
    >
      <div className="d-flex flex-wrap justify-content-around">
        <GroupsList
          groupName="My Groups"
          isLoading={isLoading}
          groups={userGroups}
          ListItemComponent={MyGroupsListItem}
        />
        <GroupsList
          groupName="Other Groups"
          isLoading={isLoading}
          groups={notUserGroups}
          ListItemComponent={GroupsListItem}
        />
      </div>
      <Link to="/members-only/create-group" className="mt-3 mb-3">
        <button>Create New Group</button>
      </Link>
    </div>
  );
};
