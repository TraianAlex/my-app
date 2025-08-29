import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { postWithCredentials } from '../../../common/hooks/data/postWithCredentials';

export const CreateGroupModal = ({ isOpen, onClose }) => {
  const [nameValue, setNameValue] = useState('');
  const navigate = useNavigate();

  const createGroup = async () => {
    if (!nameValue) {
      toast('Please type the group name!');
      return;
    }
    const response = await postWithCredentials('/members-only/groups', {
      name: nameValue,
    });
    const { newGroupId } = await response.json();
    navigate(`/members-only/groups/${newGroupId}`);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '410px',
          height: '170px',
        },
      }}
      contentLabel="Example Modal"
    >
      <h4>Create Group</h4>
      <Input
        type="text"
        placeholder="Enter Name for Group"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />
      <Button onClick={createGroup} className="ml-2">
        Create Group
      </Button>
    </Modal>
  );
};

const Input = styled.input`
  border: 2px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  padding: 16px;
`;

const Button = styled.button`
  background-color: green;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  padding: 16px;
`;
