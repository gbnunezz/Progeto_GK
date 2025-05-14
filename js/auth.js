import { auth } from './firebase.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

async function login(email, senha) {
  try {
    await signInWithEmailAndPassword(auth, email, senha);
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

async function cadastro(email, senha) {
  try {
    await createUserWithEmailAndPassword(auth, email, senha);
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Erro ao deslogar:", error.message);
  }
}

export { login, cadastro, logout };
