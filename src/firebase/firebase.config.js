// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCInRs20LSCXH99wlfSQH7C-WR2Qpmcv6M",
  authDomain: "ema-john-with-firebase-a-f5ee6.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-f5ee6",
  storageBucket: "ema-john-with-firebase-a-f5ee6.appspot.com",
  messagingSenderId: "127686172481",
  appId: "1:127686172481:web:79b0b23757eaf1743ccbc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;