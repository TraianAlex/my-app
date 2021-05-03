import { useState } from 'react';
import axios from 'axios';

export const useGitApi = () => {
  const [profiles, setProfiles] = useState([]);
  const [userName, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName) {
      alert('Fill the form!');
    }
    const { data } = await axios.get(
      `https://api.github.com/users/${userName}`,
    );
    addNewProfile(data);
    setUsername('');
  };

  const addNewProfile = (profileData) =>
    setProfiles((prevState) => [...prevState, profileData]);

  return [profiles, userName, setUsername, handleSubmit];
};
