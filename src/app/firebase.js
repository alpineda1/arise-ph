import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
//import { getAuth} from "firebase/Auth";
import {getAuth, createUserWithEmailAndPassword }from "firebase/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
        apiKey: "AIzaSyDYDPFPTKiGvVzNLb8dYnAHp_oHLic-6T8",
        authDomain: "arise-ph.firebaseapp.com",
        databaseURL: "https://arise-ph-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "arise-ph",
        storageBucket: "arise-ph.appspot.com",
        messagingSenderId: "244036030527",
        appId: "1:244036030527:web:3f3e3148577430fc82e88a",
        measurementId: "G-5CSHZYFVHG"
      }; 

      const app = firebase.initializeApp(firebaseConfig)
      const  auth = getAuth();

      export function signup(email, password) {
          return createUserWithEmailAndPassword(auth, email, password);

}
      export default app;