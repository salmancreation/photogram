import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyD0UVvvUaHc0TBXXa0jNvlYiA-lwb-QkWo",
    authDomain: "photogram-234ca.firebaseapp.com",
    databaseURL: "https://photogram-234ca.firebaseio.com",
    projectId: "photogram-234ca",
    storageBucket: "photogram-234ca.appspot.com",
    messagingSenderId: "438295457308",
    appId: "1:438295457308:web:1f5e63dcc15170600bb9d9",
    measurementId: "G-SHESVEEYJT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFilestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFilestore, timestamp }