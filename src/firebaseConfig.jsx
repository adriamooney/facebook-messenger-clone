// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjoYDwwvknNt4Hhy6TlAA2p2R94V7lGiE",
  authDomain: "facebook-messenger-clone-79282.firebaseapp.com",
  projectId: "facebook-messenger-clone-79282",
  storageBucket: "facebook-messenger-clone-79282.firebasestorage.app",
  messagingSenderId: "98071095272",
  appId: "1:98071095272:web:4f1849a3c8fa3d6259e65d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();