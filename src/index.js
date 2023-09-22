import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDiW7iL1_-stmxjKQnI4ZAPvVHKRSL2saQ",
  authDomain: "draggerdrop-auth.firebaseapp.com",
  projectId: "draggerdrop-auth",
  storageBucket: "draggerdrop-auth.appspot.com",
  messagingSenderId: "554959627689",
  appId: "1:554959627689:web:3137f0efe18e4bedd1d0b8"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

