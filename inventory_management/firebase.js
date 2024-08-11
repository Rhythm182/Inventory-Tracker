// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABM_8hgv9Jp9LPI4SqQIzNnjpOTb_KlZg",
  authDomain: "inventory-management-689d8.firebaseapp.com",
  projectId: "inventory-management-689d8",
  storageBucket: "inventory-management-689d8.appspot.com",
  messagingSenderId: "264093413471",
  appId: "1:264093413471:web:f9e0c7360f806ea012ebea",
  measurementId: "G-CEYFZJCQTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export{firestore}