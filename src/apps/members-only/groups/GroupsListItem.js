import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { postWithCredentials, useProtectedResource } from '../data';

export const GroupsListItem = ({ group }) => {
  const [hasRequest, setHasRequest] = useState(false);
  const { data: requests } = useProtectedResource(
    `/groups/${group._id}/requests`,
  );

  const requestToJoin = async () => {
    if (hasRequest) {
      toast('Request already sent');
      return;
    }
    await postWithCredentials(`/groups/${group._id}/requests`);
    toast('Your request has been submitted');
    setHasRequest(true);
  };

  useEffect(() => {
    const requestsIds = requests?.map((group) => group.groupId);
    setHasRequest(requestsIds?.includes(group._id));
  }, [group._id, requests]);

  return (
    <div className="d-flex align-items-center p-1 border border-top-0 border-right-0 border-left-0">
      <div className="flex-grow-1 text-left">
        <h3>{group.name}</h3>
        <p>Owned by: {group.owner.fullName}</p>
        <p>{group.members.length} members</p>
      </div>
      <button className="ml-3" onClick={requestToJoin}>
        {hasRequest ? 'Request Pending' : 'Ask to Join'}
      </button>
    </div>
  );
};

// l 30 - group.ownerId.fullName
