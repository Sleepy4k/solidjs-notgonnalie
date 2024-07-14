// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { FIREBASE_CONFIG } from '@consts';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const fireConfig = FIREBASE_CONFIG;

// Initialize Firebase
const fireApp = initializeApp(fireConfig);

export default fireApp;