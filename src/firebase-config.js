import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwmUX7DMkCnCFPq9JIrfja3IbNjUGeQwU",
  authDomain: "react-project-5d3f3.firebaseapp.com",
  projectId: "react-project-5d3f3",
  storageBucket: "react-project-5d3f3.appspot.com",
  messagingSenderId: "494372156935",
  appId: "1:494372156935:web:14bbc11bd617eedf525ca2",
  measurementId: "G-XZP4LMX6K5",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
