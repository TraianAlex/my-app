import React from 'react';
import { postWithCredentials } from '../data';

export const GroupsListItem = ({ group }) => {
  const requestToJoin = async () => {
    await postWithCredentials(
      `${process.env.REACT_APP_API_MEMBERS_ONLY}/groups/${group._id}/request`,
    );
    alert('Your request has been submitted');
  };

  return (
    <div className="d-flex align-items-center p-1 border border-top-0 border-right-0 border-left-0">
      <div className="flex-grow-1 text-left">
        <h3>{group.name}</h3>
        <p>Owned by: {group.ownerId.fullName}</p>
        <p>{group.members.length} members</p>
      </div>
      <button className="ml-3" onClick={requestToJoin}>
        Ask to Join
      </button>
    </div>
  );
};
