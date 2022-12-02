// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbF83WdccM9Ip4_tOxTJU5Jcjrhb9VjPk",
  authDomain: "epico-8e914.firebaseapp.com",
  projectId: "epico-8e914",
  storageBucket: "epico-8e914.appspot.com",
  messagingSenderId: "507268233954",
  appId: "1:507268233954:web:32e0e55062be7034ad3cbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default valuesxd = {
    app,
    db
}