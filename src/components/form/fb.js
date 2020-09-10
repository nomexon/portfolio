import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDQ3w3tvuqOsgJyh40xExeFRDGZDCCRgMA",
    authDomain: "test-5774f.firebaseapp.com",
    databaseURL: "https://test-5774f.firebaseio.com",
    projectId: "test-5774f",
    storageBucket: "test-5774f.appspot.com",
    messagingSenderId: "1054211276748",
    appId: "1:1054211276748:web:2b9abb486f4af9d2",
};

firebase.initializeApp(firebaseConfig);
export let auth = firebase.auth();
