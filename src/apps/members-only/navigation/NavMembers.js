import React from 'react';
import { Link } from 'react-router-dom';
// import firebase from 'firebase/app';

export const NavMembers = () => { // { user }
    // const onClickSignOut = async () => {
        // firebase.auth().signOut();
    // }
 // onClick={onClickSignOut} {user.email}
    return (
        <nav>
            <Link to="/members-only">
                <h1 className="app-heading">Members-Only App</h1>
            </Link>
            {//user
                //? (
                <>
                    <button
                        className="sign-out-button"
                        >Sign Out</button>
                    <p
                        className="logged-in-as space-before"
                    >Logged in as </p>
                </>
                //) : null
            }
        </nav>
    );
}
