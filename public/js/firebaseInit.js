// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-a0CxLYzijW_Mwi7nd71iJTQpEiqpvjA",
  authDomain: "stellae-propugnatio.firebaseapp.com",
  projectId: "stellae-propugnatio",
  storageBucket: "stellae-propugnatio.appspot.com",
  messagingSenderId: "1016738506406",
  appId: "1:1016738506406:web:ed94a8e592e5ea735e7667",
  measurementId: "G-TMJMJDN90Q"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
