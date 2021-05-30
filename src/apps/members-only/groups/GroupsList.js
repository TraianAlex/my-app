import React from 'react';

export const GroupsList = ({
  isLoading,
  groups,
  ListItemComponent,
  groupName,
}) => (
  <>
    <h2 className="section-heading">{groupName}</h2>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      groups.map((group) => <ListItemComponent key={group._id} group={group} />)
    )}
  </>
);
