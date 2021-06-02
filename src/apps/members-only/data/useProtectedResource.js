import { useState, useEffect } from 'react';
import firebase from '../firebase';

export const useProtectedResource = (url, defaultValue) => {
  const [data, setData] = useState(defaultValue);

  useEffect(() => {
    const loadResource = async () => {
      const user = firebase.auth().currentUser;
      if (!user) {
        setData(defaultValue);
        return;
      }

      const response = await fetch(
        `${process.env.REACT_APP_API_MEMBERS_ONLY}${url}`,
        {
          headers: {
            AuthToken: await user.getIdToken(),
          },
        },
      );
      const data = await response.json();
      setData(data);
    };

    loadResource();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  console.log(data);

  return { data, setData };
};
