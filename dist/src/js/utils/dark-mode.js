// dark-mode.js - Implementação do modo escuro

const themeBtn = document.querySelector('[data-theme]');
const body = document.body;

// Função para aplicar o tema
function applyTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    themeBtn.classList.remove('theme--light');
    themeBtn.classList.add('theme--dark');
  } else {
    body.classList.remove('dark-mode');
    themeBtn.classList.remove('theme--dark');
    themeBtn.classList.add('theme--light');
  }
}

// Função para alternar o tema
function toggleTheme() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
  applyTheme(newTheme);
}

// Verificar tema salvo no localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
});

// Adicionar evento de clique ao botão
if (themeBtn) {
  themeBtn.addEventListener('click', toggleTheme);
}
