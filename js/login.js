import { login } from './auth.js';

const form = document.getElementById('loginForm');
const display = document.getElementById('loginDisplay');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('emailLogin').value;
  const senha = document.getElementById('senhaLogin').value;

  const res = await login(email, senha);

  if (res.success) {
    window.location.href = 'home.html';
  } else {
    display.textContent = res.message || 'Erro ao fazer login.';
  }
});
