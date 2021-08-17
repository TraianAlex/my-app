import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const useGitApi = () => {
  const [profiles, setProfiles] = useState([]);
  const [userName, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName) {
      toast('Fill the form!');
      return;
    }
    const { data } = await axios.get(
      `https://api.github.com/users/${userName}`,
    );
    addNewProfile(data);
    setUsername('');
  };

  const addNewProfile = (profileData) =>
    setProfiles((prevState) => [profileData, ...prevState]);

  return [profiles, userName, setUsername, handleSubmit];
};
