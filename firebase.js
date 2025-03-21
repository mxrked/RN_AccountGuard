// firebase.js

import { initializeApp } from "firebase/app"; // Firebase initialization
import { getAuth } from "firebase/auth"; // Authentication
import { getFirestore } from "firebase/firestore"; // Firestore

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDBSpE6yrghs-idmkVl6lwBP4elCYHGCh8",
  authDomain: "rn-accountguard-78879.firebaseapp.com",
  projectId: "rn-accountguard-78879",
  storageBucket: "rn-accountguard-78879.appspot.com",
  messagingSenderId: "45188534343",
  appId: "1:45188534343:web:fa8d741834984647942162",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
