import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="mt-5 mb-2" onClick={() => navigate(-1)}>
      Back
    </button>
  );
};
