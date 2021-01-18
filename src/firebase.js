import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA7PkM10vGv5cLtM1liumtIHLlJ0AttOC8",
    authDomain: "manchester-city-3082f.firebaseapp.com",
    databaseURL: "https://manchester-city-3082f-default-rtdb.firebaseio.com",
    projectId: "manchester-city-3082f",
    storageBucket: "manchester-city-3082f.appspot.com",
    messagingSenderId: "446874574319",
    appId: "1:446874574319:web:d73bf7778ce8002769aa1a",
    measurementId: "G-SBDC5YLKD3"   
}

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');

export {
    firebase,
    firebaseMatches,
    firebasePromotions
}