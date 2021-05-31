import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postWithCredentials } from '../data';

export const CreateGroupPage = () => {
  const [nameValue, setNameValue] = useState('');
  const history = useHistory();

  const createGroup = async () => {
    const response = await postWithCredentials(
      `${process.env.REACT_APP_API_MEMBERS_ONLY}/groups`,
      { name: nameValue },
    );
    const { newGroupId } = await response.json();
    history.push(`/members-only/groups/${newGroupId}`);
  };

  return (
    <div className="members-only justify-content-center m-auto w-50 pt-5" style={{minHeight: "70vh"}}>
      <h2>Create Group</h2>
      <input
        type="text"
        placeholder="Enter Name for Group"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />
      <button onClick={createGroup} className="ml-2">Create Group</button>
    </div>
  );
};
