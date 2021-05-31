import React from 'react';
import { MessagesListItem } from './MessagesListItem';

export const MessagesList = ({ messages }) => (
  <>
    <h4 className="border border-dark border-top-0 border-right-0 border-left-0 pb-2">
      Messages
    </h4>
    {messages?.length > 0 ? (
      messages.map((message) => (
        <MessagesListItem key={message._id} message={message} />
      ))
    ) : (
      <p>No messages in this group yet</p>
    )}
  </>
);
