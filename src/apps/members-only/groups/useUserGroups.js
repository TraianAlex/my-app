import { useState, useEffect } from 'react';
import firebase from '../../../common/firebase/firebase';

export const useUserGroups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userGroups, setUserGroups] = useState([]);

  const loadGroups = async () => {
    const user = firebase.auth().currentUser;
    if (!user) {
      setUserGroups([]);
      setIsLoading(false);
      return;
    }

    const response = await fetch(
      `${process.env.REACT_APP_API}/members-only/users/${user.uid}/groups`,
      {
        headers: {
          AuthToken: await user.getIdToken(),
        },
      },
    );
    const groups = await response.json();
    setUserGroups(groups);
    setIsLoading(isLoading);
  };

  useEffect(() => {
    loadGroups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, userGroups };
};
