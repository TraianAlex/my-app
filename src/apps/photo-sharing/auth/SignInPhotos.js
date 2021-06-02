import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../firebase';

export const SignInPhotos = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [signInError, setSignInError] = useState('');
  const history = useHistory();

  const onClickSignIn = async () => {
    try {
      setSignInError('');
      await firebase
        .auth()
        .signInWithEmailAndPassword(emailValue, passwordValue);
      history.push('/photo-sharing');
    } catch (e) {
      setSignInError(e.message);
    }
  };

  return (
    <div className="photo-sharing pt-5" style={{ minHeight: '75vh' }}>
      <div className="justify-content-center m-auto w-50">
        <h2>Sign In</h2>
        {signInError ? (
          <div>
            <p className="bg-danger p-1 rounded-lg">{signInError}</p>
          </div>
        ) : null}
        <input
          type="text"
          value={emailValue}
          placeholder="someone@gmail.com"
          className="w-100 mb-3"
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <input
          type="password"
          value={passwordValue}
          placeholder="****"
          className="w-100 mb-3"
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <button className="w-100" onClick={onClickSignIn}>
          Sign In
        </button>
      </div>
    </div>
  );
};
