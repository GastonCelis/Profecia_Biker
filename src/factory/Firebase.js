import firebase from "firebase/app";
import "firebase/firestore";

var app = firebase.initializeApp({
    apiKey: "AIzaSyANbsK1HmNsWD3SxVEf3XcFaB4Onb2T-mg",
    authDomain: "profecia-biker-ecommerce-gec.firebaseapp.com",
    projectId: "profecia-biker-ecommerce-gec",
    storageBucket: "profecia-biker-ecommerce-gec.appspot.com",
    messagingSenderId: "40124071503",
    appId: "1:40124071503:web:ed04dbc60ab8d6985cf43a",
    measurementId: "G-FEV2T8T4Y9"
});

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}