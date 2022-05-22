import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCU8rF57FEg_k_sTag7U3dIj9IIEthKYRg",
  authDomain: "the-plant-corner-f4d5a.firebaseapp.com",
  databaseURL: "https://the-plant-corner-f4d5a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "the-plant-corner-f4d5a",
  storageBucket: "the-plant-corner-f4d5a.appspot.com",
  messagingSenderId: "227281038198",
  appId: "1:227281038198:web:afc1489b858617444ba857"
};
 
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export {db}