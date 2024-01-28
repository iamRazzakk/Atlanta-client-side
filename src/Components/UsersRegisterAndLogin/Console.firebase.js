// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8W1lHREHVILWkDyx6BUccRNTnjE5FEMU",
  authDomain: "atlanta-58928.firebaseapp.com",
  projectId: "atlanta-58928",
  storageBucket: "atlanta-58928.appspot.com",
  messagingSenderId: "759132724545",
  appId: "1:759132724545:web:b610b5ae0e77f95c29d5c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);