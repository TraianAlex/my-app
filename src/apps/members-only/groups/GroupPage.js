import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../auth';
import { useProtectedResource, postWithCredentials } from '../data';
import { MessagesList } from '../messages';
import { RequestsList } from '../requests';

export const GroupPage = () => {
  const [messageValue, setMessageValue] = useState('');
  // @ts-ignore
  const { id } = useParams();
  const { user } = useUser();
  const { data: group, setData: setGroup } = useProtectedResource(
    `/groups/${id}`,
    { owner: {}, messages: [], requests: [] },
  );

  //const {messages, setMessages} = useProtectedResource(`/groups/${id}/messages`, []);
  //const {requests, setRequests} = useProtectedResource(`/groups/${id}/requests`, []);

  const postMessage = async () => {
    const response = await postWithCredentials(`/groups/${id}/messages`, {
      text: messageValue,
    });
    const updatedMessages = await response.json();
    //setMessages(updatedMessages);
    setGroup({ ...group, messages: updatedMessages });
    //setMessageValue('');
  };

  const acceptRequest = async (requestId) => {
    const response = await postWithCredentials(
      `/groups/${id}/requests/${requestId}/accept`,
    );
    const updatedRequests = await response.json();
    //setRequests(updatedRequests);
    setGroup({ ...group, requests: updatedRequests });
  };

  const rejectRequest = async (requestId) => {
    const response = await postWithCredentials(
      `/groups/${id}/requests/${requestId}/reject`,
    );
    const updatedRequests = await response.json();
    //setRequests(updatedRequests);
    setGroup({ ...group, requests: updatedRequests });
  };

  return (
    <div
      className="members-only justify-content-center m-auto w-50 pt-3 pb-3 text-left"
      style={{ minHeight: '75vh' }}
    >
      <h3>{group?.group?.name}</h3>
      <p>Owned by: {group?.group?.ownerId.fullName}</p>
      <MessagesList messages={group.messages} />
      <div className="new-message-form">
        <input
          type="text"
          placeholder="Type your message here..."
          value={messageValue}
          onChange={(e) => setMessageValue(e.target.value)}
        />
        <button className="ml-2" onClick={postMessage}>
          Submit
        </button>
      </div>
      {group?.group?.ownerId.id === user.uid ? (
        <RequestsList
          requests={group.requests}
          onAccept={acceptRequest}
          onReject={rejectRequest}
        />
      ) : null}
    </div>
  );
};
