const editor = document.getElementById('editor');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const fontFamilySelect = document.getElementById('fontFamilySelect');
const fontSizeSelect = document.getElementById('fontSizeSelect');

function exec(cmd, value = null) {
  document.execCommand(cmd, false, value);
  editor.focus();
}

document.querySelectorAll('[data-cmd]').forEach(button => {
  button.addEventListener('click', () => exec(button.dataset.cmd));
});

document.getElementById('insertLink').addEventListener('click', () => {
  const url = prompt('Digite a URL:');
  if (url) exec('createLink', url);
});

document.getElementById('insertImage').addEventListener('click', () => {
  const url = prompt('Digite a URL da imagem:');
  if (url) exec('insertImage', url);
});

fontFamilySelect.addEventListener('change', () => exec('fontName', fontFamilySelect.value));
fontSizeSelect.addEventListener('change', () => exec('fontSize', fontSizeSelect.value));

document.getElementById('clearEditor').addEventListener('click', () => {
  editor.innerHTML = '';
  updateCount();
});

document.getElementById('downloadContent').addEventListener('click', () => {
  const blob = new Blob([editor.innerHTML], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'conteudo.html';
  link.click();
});

function updateCount() {
  const text = editor.innerText.trim();
  wordCount.innerText = `Palavras: ${text.split(/\s+/).filter(Boolean).length}`;
  charCount.innerText = `Caracteres: ${text.length}`;
}

editor.addEventListener('input', updateCount);
updateCount();

// Novas funções extras
function createColorInput(cmd) {
  const input = document.createElement('input');
  input.type = 'color';
  input.style.width = '30px';
  input.addEventListener('input', () => exec(cmd, input.value));
  document.querySelector('.toolbar').appendChild(input);
}

createColorInput('foreColor');   // cor da fonte
createColorInput('hiliteColor'); // cor de fundo

// Modo claro/escuro
const toggleTheme = document.createElement('button');
toggleTheme.textContent = '🌙';
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleTheme.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
document.querySelector('.toolbar').appendChild(toggleTheme);

// Atalhos de teclado
document.addEventListener('keydown', e => {
  if (e.ctrlKey) {
    if (e.key === 'b') { e.preventDefault(); exec('bold'); }
    if (e.key === 'i') { e.preventDefault(); exec('italic'); }
    if (e.key === 'u') { e.preventDefault(); exec('underline'); }
  }
});
