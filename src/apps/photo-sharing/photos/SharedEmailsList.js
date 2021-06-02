import React, { useState } from 'react';

export const SharedEmailsList = ({ emails, onShare }) => {
  const [inviteEmailValue, setInviteEmailValue] = useState('');

  return (
    <div className="mb-3">
      {emails.length ? <h3>Shared with:</h3> : <h3>No shared yet</h3>}
      {emails.map((user) => (
        <div key={user._id}>
          <p>{user.email}</p>
        </div>
      ))}
      <div className="d-flex justify-content-center m-auto w-50">
        <input
          type="text"
          value={inviteEmailValue}
          placeholder="Enter an email address to share with"
          onChange={(e) => setInviteEmailValue(e.target.value)}
          className="flex-grow-1 flex-shrink-0 w-100 mr-1"
        />
        <button
          className="flex-grow-1 flex-shrink-0 w-10"
          onClick={() => {
            onShare(inviteEmailValue);
            setInviteEmailValue('');
          }}
        >
          Share
        </button>
      </div>
    </div>
  );
};
