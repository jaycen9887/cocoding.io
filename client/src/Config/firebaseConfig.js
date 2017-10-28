import firebase from 'firebase';

const DB_CONFIG = {
    apiKey: "AIzaSyClQP9Fg9deVgrwupRCCxbcClvLFMR0AnQ",
    authDomain: "realtime-e3651.firebaseapp.com",
    databaseURL: "https://realtime-e3651.firebaseio.com",
    projectId: "realtime-e3651",
    storageBucket: "realtime-e3651.appspot.com",
    messagingSenderId: "67777252179"
};

const dbapp = firebase.initializeApp(DB_CONFIG);

export default dbapp;