import React from 'react';

export const RequestsListItem = ({ request, onAccept, onReject }) => (
  <div>
    <h3>{request.userId.fullName}</h3>
    <button onClick={() => onAccept(request._id)}>Accept</button>
    <button onClick={() => onReject(request._id)}>Reject</button>
  </div>
);
