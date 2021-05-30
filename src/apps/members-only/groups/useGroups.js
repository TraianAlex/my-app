import { useState, useEffect } from 'react';

export const useGroups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState([]);

  const loadGroups = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_MEMBERS_ONLY}/groups`,
    );
    const groupsRes = await response.json();
    setGroups(groupsRes);
    setIsLoading(false);
  };

  useEffect(() => {
    loadGroups();
  }, []);

  return { isLoading, groups };
};
