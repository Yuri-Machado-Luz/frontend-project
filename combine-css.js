const fs = require('fs');
const path = require('path');

// Lista de arquivos CSS a combinar
const cssFiles = [
  'src/css/base.css',
  'src/css/main.css',
  'src/css/animations.css',
  'src/css/views/nav.css',
  'src/css/views/footer.css',
  'src/css/views/home.css',
  'src/css/views/sobre.css',
  'src/css/views/projetos.css',
  'src/css/views/contato.css',
  'src/css/views/blog.css',
  'src/css/views/dark-mode.css'
];

let combinedCss = '';

cssFiles.forEach(file => {
  if (fs.existsSync(file)) {
    combinedCss += fs.readFileSync(file, 'utf8') + '\n';
  }
});

fs.writeFileSync('src/css/combined.css', combinedCss);
console.log('CSS combined into src/css/combined.css');