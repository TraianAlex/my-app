import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from '../firebase/firebase';

export const NavMembers = ({ user }) => {
  const navigate = useNavigate();

  const onClickSignOut = async () => {
    firebase.auth().signOut();
    navigate('/sign-in');
  };

  return (
    <nav
      className={`members-only d-flex ${
        user ? 'justify-content-between' : 'justify-content-center'
      } pt-4 pb-1 border border-top-0 border-right-0 border-left-0`}
    >
      <Link to={user ? '/members-only' : '/sign-in'}>
        <h3 className={`ml-2`}>My Groups</h3>
      </Link>
      <Link to={user ? '/photo-sharing' : '/sign-in'}>
        <h3 className="ml-2">Photo Sharing</h3>
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
