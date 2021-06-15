import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAkkGarawwPKDQ-tdc4zn-cYYcwmSz7LIs',
//   authDomain: 'photo-sharing-9b2e3.firebaseapp.com',
//   projectId: 'photo-sharing-9b2e3',
//   storageBucket: 'photo-sharing-9b2e3.appspot.com',
//   messagingSenderId: '973097346283',
//   appId: '1:973097346283:web:228454900660ded6758aae',
//   measurementId: 'G-T91T2PPR9C',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyDmkgLPvRpkksTOqvIuOuG6GbdcK_SLgQU',
  authDomain: 'members-only-e6ff7.firebaseapp.com',
  projectId: 'members-only-e6ff7',
  storageBucket: 'members-only-e6ff7.appspot.com',
  messagingSenderId: '817476358989',
  appId: '1:817476358989:web:c4b064208a711870205d04',
  measurementId: 'G-6DZQCQ5LGC',
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }else {
//   firebase.app();
// }

// export default firebase.initializeApp(firebaseConfig, 'photo-sharing');
export default firebase.initializeApp(firebaseConfig, 'members-only');
//export default firebase;
firebase.analytics();
