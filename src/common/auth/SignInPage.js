import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../firebase/firebase';

export const SignInPage = () => {
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
      history.push('/members-only');
    } catch (e) {
      setSignInError(e.message);
    }
  };

  return (
    <div className="members-only mt-5 pt-5" style={{ minHeight: '80vh' }}>
      <div className="justify-content-center m-auto w-50">
        <h3 className="my-5">Sign in</h3>
        {signInError ? (
          <div>
            <p className="bg-danger p-1 rounded-lg">{signInError}</p>
          </div>
        ) : null}
        <input
          type="text"
          value={emailValue}
          placeholder="Email address"
          className="w-100 mb-2"
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <input
          type="password"
          value={passwordValue}
          placeholder="Password"
          className="w-100 mb-2"
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <button className="w-100" onClick={onClickSignIn}>
          Sign In
        </button>
      </div>
    </div>
  );
};
