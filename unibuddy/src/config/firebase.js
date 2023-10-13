// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSyUFqXhuB10hI9Wt6z3ZL_RBcq_LJch8",
  authDomain: "unibuddy-ac4e1.firebaseapp.com",
  projectId: "unibuddy-ac4e1",
  storageBucket: "unibuddy-ac4e1.appspot.com",
  messagingSenderId: "396355623147",
  appId: "1:396355623147:web:3817d2b4fa2f21524586ae",
  measurementId: "G-JL4E0KNHW4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
