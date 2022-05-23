import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDKQ33tcd7WtFMufSNDdzEMNo_aqslgA9k",
    authDomain: "padel-store-luna.firebaseapp.com",
    projectId: "padel-store-luna",
    storageBucket: "padel-store-luna.appspot.com",
    messagingSenderId: "631170467703",
    appId: "1:631170467703:web:5871d7e68704d33a71c372"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);