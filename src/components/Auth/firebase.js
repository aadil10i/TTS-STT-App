console.log('JS file loaded');

// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCGodZfViOXriCKy_e-Cv5nKhA324aFHPM',
  authDomain: 'website-pde2101.firebaseapp.com',
  projectId: 'website-pde2101',
  storageBucket: 'website-pde2101.appspot.com',
  messagingSenderId: '531680273726',
  appId: '1:531680273726:web:021b692288e0be7049b86f',
  measurementId: 'G-W5W7VGNYJJ',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);

// Sign in function
async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    console.log('User signed in:', user);
  } catch (error) {
    console.error('Error signing in:', error);
  }
}

const messagesRef = collection(firestore, 'messages');

export async function addMessage(message) {
  try {
    await addDoc(messagesRef, message);
    console.log('Message added to Firestore:', message);
  } catch (error) {
    console.error('Error adding message to Firestore:', error);
  }
}

function useTeacherSpeech() {
  const [teacherSpeech, setTeacherSpeech] = useState(null);
  const [previousTeacherSpeech, setPreviousTeacherSpeech] = useState(null);

  function listenForTeacherResponse() {
    const speechRef = ref(database, 'Speech');

    onValue(speechRef, (snapshot) => {
      const data = snapshot.val();
      console.log('Teacher response:', data);

      if (data) {
        setTeacherSpeech(data);
        setPreviousTeacherSpeech(data);
      } else {
        setTeacherSpeech(null);
      }
    });
  }

  useEffect(() => {
    listenForTeacherResponse();
  }, []);

  return [teacherSpeech, previousTeacherSpeech];
}

export { signIn, useTeacherSpeech };
