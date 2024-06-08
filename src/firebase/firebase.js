// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// import {addDoc, collection, getDocs, getFirestore, query, addDoc, updateDoc, doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// la configuracion de tu web en firebase
//Lo necesario apra poder utilizar la informacion y firebase
const firebaseConfig = {
    apiKey: "AIzaSyCr3wkHMA6Wt_FFyzUhW_16HvurezSKuHo",
    authDomain: "duckwave-ecommerce.firebaseapp.com",
    projectId: "duckwave-ecommerce",
    storageBucket: "duckwave-ecommerce.appspot.com",
    messagingSenderId: "100062938601",
    appId: "1:100062938601:web:689bba8e0ace8608ceb778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Separar un modulo exclusivo de firestore. va a representar nuestra base de datos.
export const db = getFirestore(app);


