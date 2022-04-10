import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUser } from '.';
import { NavMembers } from '../navigation';

export const PrivateRoute = ({ path, component, exact }) => {
  const { isLoading, user } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Redirect to="/sign-in" />;
  }

  return (
    <>
      <NavMembers user={user} />
      <Route path={path} component={component} exact={exact} />
    </>
  );
};
