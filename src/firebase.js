// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClQ6Yj_Wi2kjhLXpcIQp_slpCRV9uNRSE",
  authDomain: "class-churead-0214.firebaseapp.com",
  projectId: "class-churead-0214",
  storageBucket: "class-churead-0214.firebasestorage.app",
  messagingSenderId: "8016165050",
  appId: "1:8016165050:web:d901bf51f8a987a7daea83",
  measurementId: "G-WF7QKHDPCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // 우리 프로젝트에 인증 서비스를 사용하겠다고 선언
//const analytics = getAnalytics(app);