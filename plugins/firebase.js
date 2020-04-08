// primero se tiene que instalar firebase desde la consola 'npm i firebase'
// llamar a este archivo en 'nuxt.config.js'
import firebase from "firebase/app"
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

const firebaseConfig = {
    apiKey: "AIzaSyApHwZSuwL6YVhPCDCofxTiVa4yVbmQIOk",
    authDomain: "nuxt-1-9caac.firebaseapp.com",
    databaseURL: "https://nuxt-1-9caac.firebaseio.com",
    projectId: "nuxt-1-9caac",
    storageBucket: "nuxt-1-9caac.appspot.com",
    messagingSenderId: "253080606579",
    appId: "1:253080606579:web:6f791efce0cc7fff505706"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const  auth = firebase. auth();
const storage = firebase.storage();

export {firebase, db, auth, storage}