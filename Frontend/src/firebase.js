// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQqhYiyM1_1yNADp-xUYeuvLZtCQcl-Qs",
  authDomain: "clone-d3afd.firebaseapp.com",
  projectId: "clone-d3afd",
  storageBucket: "clone-d3afd.firebasestorage.app",
  messagingSenderId: "927488364387",
  appId: "1:927488364387:web:2616f9ae5eecb477184d56",
  measurementId: "G-TFEWB5WEXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();