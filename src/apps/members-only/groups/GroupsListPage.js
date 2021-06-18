import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../members-only.scss';
import { useUser } from 'common/auth';
import { useProtectedResource } from 'common/hooks/data';
import { GroupsList } from './GroupsList';
import { GroupsListItem } from './GroupsListItem';
import { MyGroupsListItem } from './MyGroupsListItem';
import { useGroups } from './useGroups';

export const GroupsListPage = () => {
  const history = useHistory();
  const { user } = useUser();
  const { isLoading: isLoadingAllGroups, groups: allGroups } = useGroups();
  const {
    error,
    isLoading: isLoadingUserGroups,
    data: userGroups,
  } = useProtectedResource(`/members-only/users/${user.uid}/groups`, []);
  const isLoading = isLoadingAllGroups && isLoadingUserGroups;

  const notUserGroups = allGroups.filter((group) =>
    userGroups.every((userGroup) => userGroup._id !== group._id),
  );

  useEffect(() => {
    if (error) {
      toast(error);
      history.push('/sign-in');
    }
  }, [error, history]);

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
