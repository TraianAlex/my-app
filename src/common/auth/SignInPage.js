import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../firebase/firebase';
import { useFormValidation } from './useFormValidation';
import { validateAuth } from './validateAuth';

export const SignInPage = () => {
  const [signInError, setSignInError] = useState('');
  const history = useHistory();
  const authUser = async () => {
    try {
      setSignInError('');
      await firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.password);
      history.push('/members-only');
    } catch (e) {
      setSignInError(e.message);
    }
  };
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = useFormValidation({ email: '', password: '' }, validateAuth, authUser);

  return (
    <div className="members-only mt-5 pt-5" style={{ minHeight: '80vh' }}>
      <div className="justify-content-center m-auto w-50">
        <h3 className="my-5">Sign in</h3>
        {signInError ? (
          <p className="bg-danger p-1 rounded-lg">{signInError}</p>
        ) : null}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            value={values.email}
            placeholder="Email address"
            className="w-100 mb-2"
            style={{
              border: !!errors.email && '2px solid red',
              borderRadius: !!errors.email && '4px',
            }}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && (
            <p className="bg-danger p-1 rounded-lg">{errors.email}</p>
          )}
          <input
            type="password"
            name="password"
            value={values.password}
            placeholder="Password"
            className="w-100 mb-2"
            style={{
              border: !!errors.email && '2px solid red',
              borderRadius: !!errors.email && '4px',
            }}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && (
            <p className="bg-danger p-1 rounded-lg">{errors.password}</p>
          )}
          <button type="submit" className="w-100" disabled={isSubmitting}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
