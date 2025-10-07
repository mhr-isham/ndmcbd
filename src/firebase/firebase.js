import { firebaseApp } from "./firebaseConfig";
import {
  getAuth,
  FacebookAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
const auth =  firebaseApp;
const FbProvider = new FacebookAuthProvider();

export const FacebookLogin = async () => {
  const Auth = signInWithPopup(fbauth, FbProvider);
  return Auth;
};

const googleProvider = new GoogleAuthProvider();

export const GoogleLogin = () => {
  const GoogleAuth = signInWithPopup(auth, googleProvider);
  return GoogleAuth;
};
