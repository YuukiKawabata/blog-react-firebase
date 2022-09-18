// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDixX4czC9Ca_9ABNDk9pSieCKD_1ZhAAs",
  authDomain: "blog-react-c63eb.firebaseapp.com",
  projectId: "blog-react-c63eb",
  storageBucket: "blog-react-c63eb.appspot.com",
  messagingSenderId: "216667566850",
  appId: "1:216667566850:web:09cdf06bd439e48ec0881b",
  measurementId: "G-KZZ49GZPNC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };