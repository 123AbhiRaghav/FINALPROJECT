// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "mytask-edb47.firebaseapp.com",
  projectId: "mytask-edb47",
  storageBucket: "mytask-edb47.appspot.com",
  messagingSenderId: "1096902600667",
  appId: "1:1096902600667:web:beefd0362fa012085129fe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);