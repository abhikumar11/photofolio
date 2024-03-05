import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB9Ys-AOUAX5hhOjXguJWsQ_SMQd9597zo",
    authDomain: "photo-folio-e60aa.firebaseapp.com",
    projectId: "photo-folio-e60aa",
    storageBucket: "photo-folio-e60aa.appspot.com",
    messagingSenderId: "206945774374",
    appId: "1:206945774374:web:30527973d11fda2d48efe7"
  };
  const app=initializeApp(firebaseConfig);
  export const db=getFirestore(app);