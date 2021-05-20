import React from 'react';
import { useHistory } from 'react-router-dom';

export const BackButton = () => {
  const history = useHistory();

  return (
    <button className="mt-4 mb-2" onClick={history.goBack}>
      Back
    </button>
  );
};
