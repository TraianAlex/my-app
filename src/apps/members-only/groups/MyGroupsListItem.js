import React from 'react';
import { Link } from 'react-router-dom';

export const MyGroupsListItem = ({ group }) => (
    <div className="list-item">
        <div className="list-item-data">
            <Link to={`/members-only/groups/${group._id}`}>
                <h3>{group.name}</h3>
            </Link>
            <p>Owned By: {group.ownerId.fullName}</p>
            <p>{group.members.length} members</p>
        </div>
    </div>
);
