import React from 'react';

export const GroupsList = ({
  isLoading,
  groups,
  ListItemComponent,
  groupName,
}) => (
  <div className="mt-3">
    <h3 className="border border-dark border-top-0 border-right-0 border-left-0 pb-2">{groupName}</h3>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      groups.map((group) => <ListItemComponent key={group._id} group={group} />)
    )}
  </div>
);
