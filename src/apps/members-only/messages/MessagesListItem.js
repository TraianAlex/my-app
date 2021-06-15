import React from 'react';

export const MessagesListItem = ({ message }) => (
  <div className="d-flex border border-top-0 border-right-0 border-left-0 p-1">
    <div className="flex-grow-1">
      <h4>{message.userName}</h4>
      <p>{message.text}</p>
    </div>
  </div>
);

// l 6 - message.userId.fullName
