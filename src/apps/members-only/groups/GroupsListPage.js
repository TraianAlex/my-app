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
    <div className="members-only justify-content-center m-auto w-50">
      <GroupsList
        groupName='My Groups'
        isLoading={isLoading}
        groups={userGroups}
        ListItemComponent={MyGroupsListItem}
      />
      <GroupsList
        groupName='Other Groups'
        isLoading={isLoading}
        groups={notUserGroups}
        ListItemComponent={GroupsListItem}
      />
      <Link to="/members-only/create-group">
        <button>Create New Group</button>
      </Link>
    </div>
  );
};
