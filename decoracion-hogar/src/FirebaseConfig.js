import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDFVqHRmwZw-Pvb15rDtGR-l-K1zKEURso",
  authDomain: "entrega-final---muguiro.firebaseapp.com",
  projectId: "entrega-final---muguiro",
  storageBucket: "entrega-final---muguiro.appspot.com",
  messagingSenderId: "121829174076",
  appId: "1:121829174076:web:3564099104bfa7fa308c39",
  measurementId: "G-EJTPG18D2R"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export { app, analytics };