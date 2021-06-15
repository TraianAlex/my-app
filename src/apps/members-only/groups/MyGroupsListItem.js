import React from 'react';
import { Link } from 'react-router-dom';

export const MyGroupsListItem = ({ group }) => (
  <div className="d-flex border border-top-0 border-right-0 border-left-0">
    <div className="flex-grow-1 align-items-center text-left p-1">
      <Link to={`/members-only/groups/${group._id}`}>
        <h3>{group.name}</h3>
      </Link>
      <p>Owned By: {group.owner.fullName}</p>
      <p>{group.members.length} members</p>
    </div>
  </div>
);

// l 10 - group.ownerId.fullName
