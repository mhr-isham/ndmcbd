import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth, FacebookAuthProvider } from "firebase/auth";
const API_KEY = import.meta.env.VITE_FACEBOOK_API_KEY;
const APP_ID = import.meta.env.VITE_FACEBOOK_APP_ID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "notredamemathclub.firebaseapp.com",
  projectId: "notredamemathclub",
  storageBucket: "notredamemathclub.appspot.com",
  messagingSenderId: "208599447543",
  appId: APP_ID,
  measurementId: "G-1RVG2E4WCS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export { firebaseApp };
