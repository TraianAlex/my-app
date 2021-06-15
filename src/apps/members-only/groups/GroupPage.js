import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUser } from '../auth';
import { useProtectedResource, postWithCredentials } from '../data';
import { MessagesList } from '../messages';
import { RequestsList } from '../requests';

export const GroupPage = () => {
  const [messageValue, setMessageValue] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  // @ts-ignore
  const { id } = useParams();
  const { user } = useUser();
  const {
    error: groupError,
    data: group,
    setData: setGroup,
  } = useProtectedResource(`/groups/${id}`, {
    owner: {},
    messages: [],
    requests: [],
  });

  //const {messages, setMessages} = useProtectedResource(`/groups/${id}/messages`, []);
  //const {requests, setRequests} = useProtectedResource(`/groups/${id}/requests`, []);

  const postMessage = async () => {
    if (!messageValue) {
      toast('Please type the message!');
      return;
    }
    const response = await postWithCredentials(`/groups/${id}/messages`, {
      text: messageValue,
    });
    const updatedMessages = await response.json();
    response.ok
      ? setGroup({ ...group, messages: updatedMessages })
      : setError(updatedMessages.message);
    //setMessages(updatedMessages);
    setMessageValue('');
  };

  const acceptRequest = async (requestId) => {
    const response = await postWithCredentials(
      `/groups/${id}/requests/${requestId}/accept`,
    );
    const updatedRequests = await response.json();
    response.ok
      ? setGroup({ ...group, requests: updatedRequests })
      : setError(updatedRequests.message);
    //setRequests(updatedRequests);
  };

  const rejectRequest = async (requestId) => {
    const response = await postWithCredentials(
      `/groups/${id}/requests/${requestId}/reject`,
    );
    const updatedRequests = await response.json();
    response.ok
      ? setGroup({ ...group, requests: updatedRequests })
      : setError(updatedRequests.message);
    //setRequests(updatedRequests);
  };

  useEffect(() => {
    if (groupError || error) {
      toast(groupError || error);
      history.push('/members-only');
    }
  }, [groupError, history, error]);

  return (
    <div
      className="members-only justify-content-center m-auto w-50 pt-3 pb-3 text-left"
      style={{ minHeight: '75vh' }}
    >
      <h3>{group?.name}</h3>
      <p>Owned by: {group?.owner.fullName}</p>
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
      {group?.owner.id === user.uid ? (
        <RequestsList
          requests={group.requests}
          onAccept={acceptRequest}
          onReject={rejectRequest}
        />
      ) : null}
    </div>
  );
};

// l 79 - group?.group?.name
// l 80 - group?.group?.ownerId.fullName
// l 92 - group?.group?.ownerId.id === user.uid
