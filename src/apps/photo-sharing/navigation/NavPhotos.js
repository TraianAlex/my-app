import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';

export const NavPhotos = ({ user }) => {
  const onClickSignOut = async () => {
    firebase.auth().signOut();
  };

  return (
    <nav
      className={`photo-sharing d-flex ${
        user ? 'justify-content-between' : 'justify-content-center'
      } pt-5 pb-4 border border-top-0 border-right-0 border-left-0`}
    >
      <Link to={user ? '/photo-sharing' : '/photo-sharing/sign-in'}>
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
