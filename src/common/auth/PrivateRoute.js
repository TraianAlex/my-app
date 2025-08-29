import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '.';
import { NavMembers } from '../navigation';

export const PrivateRoute = ({ children }) => {
  const { isLoading, user } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <>
      <NavMembers user={user} />
      {children}
    </>
  );
};
