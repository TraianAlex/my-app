import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoutePhotos = ({ isAuthed, isLoading, ...props }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthed) {
    return <Redirect to="/photo-sharing/sign-in" />;
  }

  return <Route {...props} />;
};
