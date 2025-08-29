import React, { Suspense, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../members-only.scss';
import { useUser } from '../../../common/auth';
import { useProtectedResource } from '../../../common/hooks/data';
import { GroupsList } from './GroupsList';
import { GroupsListItem } from './GroupsListItem';
import { MyGroupsListItem } from './MyGroupsListItem';
import { useGroups } from './useGroups';
import { CreateGroupModal } from './CreateGroupModal';

export const GroupsListPage = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const navigate = useNavigate();
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
      navigate('/sign-in');
    }
  }, [error, navigate]);

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
      <Link to="#" className="mt-3 mb-3">
        <button onClick={() => setIsCreateOpen(true)}>Create New Group</button>
      </Link>
      {isCreateOpen && (
        <Suspense fallback={'Loading...'}>
          <CreateGroupModal
            isOpen={isCreateOpen}
            onClose={() => setIsCreateOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
};
