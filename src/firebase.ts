import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
// Replace these values with your actual Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtekH5W-NmK3WS-8-wYTLu4auXpE6PQRM",
    authDomain: "bioshop-a164e.firebaseapp.com",
    projectId: "bioshop-a164e",
    storageBucket: "bioshop-a164e.firebasestorage.app",
    messagingSenderId: "1012000090566",
    appId: "1:1012000090566:web:8aa6ccd0f0a7aa66412ac7",
    measurementId: "G-07VT6WH6XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firestore (disabled for now)
// export const db = getFirestore(app);

// Create Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

export default app; 