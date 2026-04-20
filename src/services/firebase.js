import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDxwD-WbrIZHlEMHxBXBtINs-9UeXIznUQ",
    authDomain: "agros-analytics.firebaseapp.com",
    projectId: "agros-analytics",
    storageBucket: "agros-analytics.firebasestorage.app",
    messagingSenderId: "762524607920",
    appId: "1:762524607920:web:5988e7332536e1cab32275",
    measurementId: "G-1MR24E2KSL"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);