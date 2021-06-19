import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  useProtectedResource,
  postWithCredentials,
} from '../../../common/hooks/data';

export const GroupsListItem = ({ group }) => {
  const [hasRequest, setHasRequest] = useState(false);
  const { isLoading, data: requests } = useProtectedResource(
    `/members-only/groups/${group._id}/requests`,
  );

  const requestToJoin = async () => {
    if (hasRequest) {
      toast('Request already sent');
      return;
    }
    await postWithCredentials(`/members-only/groups/${group._id}/requests`);
    toast('Your request has been submitted');
    setHasRequest(true);
  };

  useEffect(() => {
    const requestsGroupIds = requests?.map((request) => request.groupId);
    console.log(requestsGroupIds);
    setHasRequest(requestsGroupIds?.includes(group._id));
  }, [group._id, requests]);

  return (
    <div className="d-flex align-items-center p-1 border border-top-0 border-right-0 border-left-0">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="flex-grow-1 text-left">
            <h3>{group.name}</h3>
            <p>Owned by: {group.owner.fullName}</p>
            <p>{group.members.length} members</p>
          </div>
          <button className="ml-3" onClick={requestToJoin}>
            {hasRequest ? 'Request Pending' : 'Ask to Join'}
          </button>
        </>
      )}
    </div>
  );
};

// l 30 - group.ownerId.fullName
