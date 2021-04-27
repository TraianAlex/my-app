import React, { useState } from 'react';
import axios from 'axios';

export const Form = ({ onSubmit }) => {
  const [userName, setUsername] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await axios.get(
      `https://api.github.com/users/${userName}`,
    );
    onSubmit(data);
    setUsername('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userName}
        onChange={({ target }) => setUsername(target.value)}
        placeholder="GitHub username"
        required
      />
      <button>Add card</button>
    </form>
  );
};
