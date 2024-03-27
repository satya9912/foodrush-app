// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaEw7pUKks0H3I03WgAv--WTEbzr4LJzk",
  authDomain: "foodrush-app-39465.firebaseapp.com",
  projectId: "foodrush-app-39465",
  storageBucket: "foodrush-app-39465.appspot.com",
  messagingSenderId: "252051634006",
  appId: "1:252051634006:web:daef5221f49a4f763dc8f7",
  measurementId: "G-MD89FF21ZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);