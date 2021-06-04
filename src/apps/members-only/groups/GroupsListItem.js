import React from 'react';
import { toast } from 'react-toastify';
import { postWithCredentials, useProtectedResource } from '../data';

export const GroupsListItem = ({ group }) => {
  const { data: requests } = useProtectedResource(
    `/groups/${group._id}/requests`,
  );
  const requestsIds = requests?.map((group) => group.groupId._id);
  const hasRequest = requestsIds?.includes(group._id);

  const requestToJoin = async () => {
    if (hasRequest) {
      toast('Request already sent');
      return;
    }
    await postWithCredentials(`/groups/${group._id}/request`);
    toast('Your request has been submitted');
  };

  return (
    <div className="d-flex align-items-center p-1 border border-top-0 border-right-0 border-left-0">
      <div className="flex-grow-1 text-left">
        <h3>{group.name}</h3>
        <p>Owned by: {group.ownerId.fullName}</p>
        <p>{group.members.length} members</p>
      </div>
      <button className="ml-3" onClick={requestToJoin}>
        {hasRequest ? 'Request Pending' : 'Ask to Join'}
      </button>
    </div>
  );
};
