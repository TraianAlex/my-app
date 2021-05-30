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
    <div className="list-item">
      <div className="list-item-data">
        <h3>{group.name}</h3>
        <p>Owned by: {group.ownerId.fullName}</p>
        <p>{group.members.length} members</p>
      </div>
      <button onClick={requestToJoin}>Ask to Join</button>
    </div>
  );
};
