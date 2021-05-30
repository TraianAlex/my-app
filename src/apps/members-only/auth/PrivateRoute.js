import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ isAuthed, isLoading, ...props }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthed) {
    return <Redirect to="/members-only/sign-in" />;
  }

  return <Route {...props} />;
};
