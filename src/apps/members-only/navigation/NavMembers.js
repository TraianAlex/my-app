import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../firebase';

export const NavMembers = ({ user }) => {
  const history = useHistory();

  const onClickSignOut = async () => {
    firebase.auth().signOut();
    history.push('/members-only/sign-in');
  };

  return (
    <nav className="members-only pt-4">
      <Link to="/members-only">
        <h2 className={`d-inline-block m-1 ${user ? 'float-left' : ''}`}>Members-Only</h2>
      </Link>
      {user ? (
        <>
          <button className="float-right" onClick={onClickSignOut}>
            Sign Out
          </button>
          <p className="float-right mr-3 mt-1">{user.email}</p>
        </>
      ) : null}
    </nav>
  );
};
