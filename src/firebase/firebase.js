import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGZu05T1rIgWAHoELUFQApVkb0lWMnn8I",
  authDomain: "psychologist-services-78dcf.firebaseapp.com",
  projectId: "psychologist-services-78dcf",
  storageBucket: "psychologist-services-78dcf.firebasestorage.app",
  messagingSenderId: "255607756779",
  appId: "1:255607756779:web:d79091d78348db52006bae",
  measurementId: "G-5WVF1BZH7H",
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getDatabase(app);
