import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAkkGarawwPKDQ-tdc4zn-cYYcwmSz7LIs',
  authDomain: 'photo-sharing-9b2e3.firebaseapp.com',
  projectId: 'photo-sharing-9b2e3',
  storageBucket: 'photo-sharing-9b2e3.appspot.com',
  messagingSenderId: '973097346283',
  appId: '1:973097346283:web:228454900660ded6758aae',
  measurementId: 'G-T91T2PPR9C',
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }else {
//   firebase.app();
// }

export default firebase.initializeApp(firebaseConfig, 'photo-sharing');
//export default firebase;
firebase.analytics();
