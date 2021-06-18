import { useState, useEffect } from 'react';
import firebase from '../../../common/firebase/firebase';

export const useMessages = (id) => {
  const [messages, setMessages] = useState([]);

  const loadMessages = async () => {
    const user = firebase.auth().currentUser;
    const response = await fetch(
      `${process.env.REACT_APP_API}/members-only/groups/${id}/messages`,
      {
        headers: {
          AuthToken: await user.getIdToken(),
        },
      },
    );
    const messages = await response.json();
    setMessages(messages);
  };

  useEffect(() => {
    loadMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return messages;
};
