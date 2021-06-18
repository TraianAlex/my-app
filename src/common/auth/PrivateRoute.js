import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUser } from '.';
import { NavMembers } from '../navigation';

export const PrivateRoute = ({ isAuthed, isLoading, ...props }) => {
  const { user } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthed) {
    return <Redirect to="/sign-in" />;
  }

  return (
    <>
      <NavMembers user={user} />
      <Route {...props} />
    </>
  );
};
