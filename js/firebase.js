import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBCNkbiaV5qckp57uBQnWP2zivmbInYfBA",
  authDomain: "leitorplus-f0098.firebaseapp.com",
  databaseURL: "https://leitorplus-f0098-default-rtdb.firebaseio.com",
  projectId: "leitorplus-f0098",
  storageBucket: "leitorplus-f0098.firebasestorage.app",
  messagingSenderId: "872161417021",
  appId: "1:872161417021:web:de1e9c21863b37debf9754",
  measurementId: "G-H7ZG5GSZLG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
