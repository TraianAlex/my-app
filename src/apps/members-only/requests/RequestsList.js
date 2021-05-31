import React from 'react';
import { RequestsListItem } from './RequestsListItem';

export const RequestsList = ({ requests, onAccept, onReject }) => (
  <>
    <h3 className="border border-dark border-top-0 border-right-0 border-left-0 pb-2">
      Join Requests
    </h3>
    {requests?.length > 0 ? (
      requests.map((request) => (
        <RequestsListItem
          key={request._id}
          request={request}
          onAccept={onAccept}
          onReject={onReject}
        />
      ))
    ) : (
      <p>No pending requests</p>
    )}
  </>
);
