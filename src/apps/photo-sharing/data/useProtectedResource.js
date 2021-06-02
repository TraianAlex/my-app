import { useState, useEffect } from 'react';
import firebase from '../firebase';

export const useProtectedResource = (url, defaultValue) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(defaultValue);

  useEffect(() => {
    const loadResource = async () => {
      const user = firebase.auth().currentUser;
      if (!user) {
        setData(defaultValue);
        return;
      }

      const response = await fetch(
        `${process.env.REACT_APP_API_PHOTOS_SHARING}${url}`,
        {
          headers: {
            AuthToken: await user.getIdToken(),
          },
        },
      );
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    };

    loadResource();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { isLoading, data, setData };
};
