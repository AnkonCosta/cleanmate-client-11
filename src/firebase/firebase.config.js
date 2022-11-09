// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAGVHFvJcJyDFHqtZytJuhXWT0F3xKmDcs",
//   authDomain: "service-review-1.firebaseapp.com",
//   projectId: "service-review-1",
//   storageBucket: "service-review-1.appspot.com",
//   messagingSenderId: "420889064889",
//   appId: "1:420889064889:web:313d232436e13885e27268",
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
