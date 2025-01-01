// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADnYvCzxSQczVhhfyHU3oiXcsF2ELtTZ0",
  authDomain: "practiceproject1-291e8.firebaseapp.com",
  projectId: "practiceproject1-291e8",
  storageBucket: "practiceproject1-291e8.firebasestorage.app",
  messagingSenderId: "875970532761",
  appId: "1:875970532761:web:260a8ca0e315d2de58ef08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;