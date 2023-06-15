import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
// import {initializeApp} from 'firebase/app';
// import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA2gD1uNW_j8NW_OxVWildsm8t3MjTJKaA',
  authDomain: 'fitness-plus-b21a3.firebaseapp.com',
  projectId: 'fitness-plus-b21a3',
  storageBucket: 'fitness-plus-b21a3.appspot.com',
  messagingSenderId: '29877006338',
  appId: '1:29877006338:web:f1b8db35c14f70b93ff71b',
  measurementId: 'G-8QP2BH2WVX',
};

let app;
app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};
export const firestore = firebase.firestore();
