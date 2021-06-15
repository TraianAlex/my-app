import React from 'react';

export const RequestsListItem = ({ request, onAccept, onReject }) => (
  <div>
    <h4>{request.userName.fullName}</h4>
    <button onClick={() => onAccept(request._id)}>Accept</button>
    <button className="ml-2" onClick={() => onReject(request._id)}>
      Reject
    </button>
  </div>
);

// l 5 - request.userId.fullName
