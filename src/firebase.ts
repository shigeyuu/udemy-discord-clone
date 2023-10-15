// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDlYBQC90EINL_OQzv_WUO6iIN5OWTCL64",
  authDomain: "discord-clone-3cc98.firebaseapp.com",
  projectId: "discord-clone-3cc98",
  storageBucket: "discord-clone-3cc98.appspot.com",
  messagingSenderId: "307020046912",
  appId: "1:307020046912:web:f32f28db1c6edc26a4b5a5",
  measurementId: "G-9S1340NMXG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };