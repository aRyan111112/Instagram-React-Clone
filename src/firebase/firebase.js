// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDHGqX5j2KWeXH0J3OLRWsKuHztMDdGlvM",
  authDomain: "insta-react-clone-b9e6e.firebaseapp.com",
  projectId: "insta-react-clone-b9e6e",
  storageBucket: "insta-react-clone-b9e6e.appspot.com",
  messagingSenderId: "507429223965",
  appId: "1:507429223965:web:55e7e392a693a79b1290f4",
  measurementId: "G-5WZ0PY3B8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export (app, auth, firestore, storage)