// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT6w1cvO65Y5_CybMgSi1vG7PR3MQmyOg",
  authDomain: "fjp9reels.firebaseapp.com",
  projectId: "fjp9reels",
  storageBucket: "fjp9reels.appspot.com",
  messagingSenderId: "550095879197",
  appId: "1:550095879197:web:9faae115efcf2633ccdaf4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
export { auth, storage };
