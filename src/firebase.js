import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDiW7iL1_-stmxjKQnI4ZAPvVHKRSL2saQ",
  authDomain: "draggerdrop-auth.firebaseapp.com",
  projectId: "draggerdrop-auth",
  storageBucket: "draggerdrop-auth.appspot.com",
  messagingSenderId: "554959627689",
  appId: "1:554959627689:web:3137f0efe18e4bedd1d0b8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
