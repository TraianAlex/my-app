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
    <nav
      className={`members-only d-flex ${
        user ? 'justify-content-between' : 'justify-content-center'
      } pt-4 pb-1 border border-top-0 border-right-0 border-left-0`}
    >
      <Link to="/members-only">
        <h3 className={`ml-2`}>My Groups</h3>
      </Link>
      {user ? (
        <div>
          <button className="float-right mr-3" onClick={onClickSignOut}>
            Sign Out
          </button>
          <p className="float-right mr-3 mt-1">{user.email}</p>
        </div>
      ) : null}
    </nav>
  );
};
