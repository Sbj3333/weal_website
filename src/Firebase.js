
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDKQKocRCxO-AdPwR1uOMIiSuLDT3fgtl4",
  authDomain: "weal-8f2aa.firebaseapp.com",
  projectId: "weal-8f2aa",
  storageBucket: "weal-8f2aa.appspot.com",
  messagingSenderId: "275707566787",
  appId: "1:275707566787:web:0193224746359cd2dde076"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
