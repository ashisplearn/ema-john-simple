// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9lBKfsW-GJ7SxrhergKqjzfbudS3JwF0",
  authDomain: "ema-john-simple-7e00a.firebaseapp.com",
  projectId: "ema-john-simple-7e00a",
  storageBucket: "ema-john-simple-7e00a.appspot.com",
  messagingSenderId: "1028851690456",
  appId: "1:1028851690456:web:c513ac6a5006e1594820ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;