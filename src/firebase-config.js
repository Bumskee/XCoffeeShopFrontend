// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzwyszYqkT0YxRX8XLT6pO7rqXzwx0ldA",
  authDomain: "auth-b69b6.firebaseapp.com",
  projectId: "auth-b69b6",
  storageBucket: "auth-b69b6.appspot.com",
  messagingSenderId: "1052334314308",
  appId: "1:1052334314308:web:f1ca0526e3b784b4be7d11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app);
export const Provider = new GoogleAuthProvider();