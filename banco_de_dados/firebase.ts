// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firestore from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXlH6G0S_S6kDSB6-a3leAYfHtNE7AvU0",
  authDomain: "bellx-silva.firebaseapp.com",
  projectId: "bellx-silva",
  storageBucket: "bellx-silva.appspot.com",
  messagingSenderId: "553460623044",
  appId: "1:553460623044:web:62183fc6f986d24c5b8b91",
  measurementId: "G-RLHQ81DF2J"
};

// Initialize Firebase
console.log("Conectado ao Firebase!");
const Firebase = initializeApp(firebaseConfig);
export const db = firestore.getFirestore(Firebase);

export { firestore };
