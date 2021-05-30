import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDmkgLPvRpkksTOqvIuOuG6GbdcK_SLgQU",
  authDomain: "members-only-e6ff7.firebaseapp.com",
  projectId: "members-only-e6ff7",
  storageBucket: "members-only-e6ff7.appspot.com",
  messagingSenderId: "817476358989",
  appId: "1:817476358989:web:c4b064208a711870205d04",
  measurementId: "G-6DZQCQ5LGC"
};

export default firebase.initializeApp(firebaseConfig);
firebase.analytics();
