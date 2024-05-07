// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3DrsWo--kJCvcbnDq9ybtKpF_ZuL9MTA",
  authDomain: "netflixgpt-39e49.firebaseapp.com",
  projectId: "netflixgpt-39e49",
  storageBucket: "netflixgpt-39e49.appspot.com",
  messagingSenderId: "981032647500",
  appId: "1:981032647500:web:acea57a96a7d04cc662de9",
  measurementId: "G-7HP4WP70RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth=getAuth()