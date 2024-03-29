// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3baXil-EzIvr01aMMhXLNgyffC2SEZD0",
  authDomain: "foodrush-55dba.firebaseapp.com",
  projectId: "foodrush-55dba",
  storageBucket: "foodrush-55dba.appspot.com",
  messagingSenderId: "630928435670",
  appId: "1:630928435670:web:8d6fcf7a8f888c8a3f9c77",
  measurementId: "G-5SYVBB4JZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);