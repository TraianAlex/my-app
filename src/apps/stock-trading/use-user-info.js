import { useState, useEffect } from 'react';

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const loadUserInfo = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API}/stock-trading/user-info`,
      );
      const userInfo = await response.json();

      setUserInfo(userInfo);
    };

    loadUserInfo();
  }, []);

  return [userInfo, setUserInfo];
};
