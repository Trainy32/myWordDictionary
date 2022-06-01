// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNKxTNWs7DtGmBVTIkOQE5U2vVPdBymSs",
  authDomain: "sparta-react-basic-b15c2.firebaseapp.com",
  projectId: "sparta-react-basic-b15c2",
  storageBucket: "sparta-react-basic-b15c2.appspot.com",
  messagingSenderId: "381993601261",
  appId: "1:381993601261:web:ada8faad83f8d2cf6424e4",
  measurementId: "G-9RV4PFY3GQ"
};

// Initialize Firebase

initializeApp(firebaseConfig);

export const db = getFirestore()