console.log("JS file loaded");

import { Link } from 'react-router-dom';
import { initializeApp } from './firebase/app';
import { getAuth, signInWithEmailAndPassword } from './firebase/auth';
import { getFirestore } from './firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCGodZfViOXriCKy_e-Cv5nKhA324aFHPM",
    authDomain: "website-pde2101.firebaseapp.com",
    projectId: "website-pde2101",
    storageBucket: "website-pde2101.appspot.com",
    messagingSenderId: "531680273726",
    appId: "1:531680273726:web:021b692288e0be7049b86f",
    measurementId: "G-W5W7VGNYJJ"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

// Sign in function
async function signIn(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User signed in:", user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  }

// Add event listener for form submission
document.getElementById("login-form").addEventListener("submit", (event) => {
  console.log("submit button clicked");  
  event.preventDefault();
    const email = document.getElementById("logemail").value;
    const password = document.getElementById("logpass").value;
    signIn(email, password);
  });


