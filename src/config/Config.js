import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAGNWhvo-ubh5_pmCsGo_f2iVT1anKTcu0",
    authDomain: "the-plant-corner-252bc.firebaseapp.com",
    databaseURL: "https://the-plant-corner-252bc-default-rtdb.firebaseio.com",
    projectId: "the-plant-corner-252bc",
    storageBucket: "the-plant-corner-252bc.appspot.com",
    messagingSenderId: "213195435292",
    appId: "1:213195435292:web:0d77868c1d885657f55ed9"
  };
 
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export {auth,db,storage}