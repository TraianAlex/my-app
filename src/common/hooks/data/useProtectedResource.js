import { useState, useEffect, useCallback } from 'react';
import firebase from '../../firebase/firebase';

export const useProtectedResource = (url, defaultValue) => {
  const [data, setData] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const loadResource = useCallback(async () => {
    const user = firebase.auth().currentUser;
    if (!user) {
      setData(defaultValue);
      return;
    }

    const response = await fetch(
      `${process.env.REACT_APP_API}${url}`,
      {
        headers: {
          AuthToken: await user.getIdToken(),
        },
      },
    );
    const data = await response.json();
    response.ok ? setData(data) : setError(data.message);
    setIsLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  // @ts-ignore
  useEffect(() => {
    const resources = loadResource();
    return resources;
  }, [loadResource]);

  return { error, isLoading, data, setData };
};
