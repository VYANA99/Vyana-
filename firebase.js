// Firebase init (module)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCE8Y9HD0S71cOzxfvBc2JL4eGSUnXY8DQ",
  authDomain: "vyana-af72e.firebaseapp.com",
  databaseURL: "https://vyana-af72e-default-rtdb.firebaseio.com",
  projectId: "vyana-af72e",
  storageBucket: "vyana-af72e.firebasestorage.app",
  messagingSenderId: "556375515167",
  appId: "1:556375515167:web:790177e482a01429fc752a"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
