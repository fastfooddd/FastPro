import firebase from "firebase/compat";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzbXBx8pTwOvq6u1r98n_Wx4FKLOUyIXA",
  authDomain: "fir-auth-796e6.firebaseapp.com",
  projectId: "fir-auth-796e6",
  storageBucket: "fir-auth-796e6.appspot.com",
  messagingSenderId: "908827725649",
  appId: "1:908827725649:web:75ae7b925fd296b3ca4d70"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };