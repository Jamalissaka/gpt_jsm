// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1TwVQd45OQ9lbVm9YPBg1koI-dBMlRwg",
  authDomain: "gpt3-28379.firebaseapp.com",
  projectId: "gpt3-28379",
  storageBucket: "gpt3-28379.appspot.com",
  messagingSenderId: "780430409511",
  appId: "1:780430409511:web:9a7e66bbc89e28ae96b302",
  measurementId: "G-KRX8BGHNNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);