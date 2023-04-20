import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey : "AIzaSyBOxGDwW1tslg7GEwP-Pgvico95EmPlemA" , 
    authDomain: "projetoead-18b44.firebaseapp.com",
    projectId: "projetoead-18b44",
    storageBucket : "projetoead-18b44.appspot.com" , 
    messageSenderId : "570557742537" , 
    appId : "1:570557742537:web:c98a975994bd61ffbffc18"
};

//Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;