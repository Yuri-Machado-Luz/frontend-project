# Frontend Project

Projeto desenvolvido como requisito para conclusão do curso em Análise e Desenvolvimento de Sistemas. Este projeto cria uma plataforma web completa para ONGs gerenciarem atividades, divulgar projetos, captar recursos e engajar voluntários, aplicando conceitos de HTML5, CSS3 e JavaScript.

**Status do Projeto:** Versão 1.0 - Concluído

https://yuri-machado-luz.github.io/frontend-project/

## Entregas do Projeto

Este projeto foi desenvolvido em quatro entregas conforme os requisitos do curso. Para detalhes completos sobre cada entrega, consulte [SOBRE.md](SOBRE.md).

- **Primeira Entrega**: Estrutura HTML5 semântica, formulários complexos e validação nativa.
- **Segunda Entrega**: Sistema de design CSS3, leiautes responsivos com Flexbox/Grid, navegação interativa.
- **Terceira Entrega**: JavaScript avançado, SPA (Single Page Application), manipulação do DOM e validação dinâmica.
- **Quarta Entrega**: Controle de versão com Git/GitHub, acessibilidade WCAG 2.1, otimização para produção e documentação.

Para mais detalhes sobre a proposta e entregas, consulte [SOBRE.md](SOBRE.md).

## Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3735?style=for-the-badge&logo=postcss&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

### Dependências Principais

- **Express**: Framework web para Node.js.
- **Modern Normalize**: Reset CSS moderno.

### Dependências de Desenvolvimento

- **PostCSS**: Ferramenta para transformar CSS.
- **Autoprefixer**: Adiciona prefixos CSS automaticamente.
- **CSSNano**: Minifica CSS.
- **PostCSS Nesting**: Permite aninhamento CSS.
- **ESLint**: Linting para JavaScript.
- **Prettier**: Formatação de código.
- **Clean CSS CLI**: Ferramenta para minificação CSS.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Yuri-Machado-Luz/frontend-project.git
   cd frontend-project
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. (Opcional) Instale o live-server globalmente para desenvolvimento frontend:

   ```bash
   npm install -g live-server
   ```

## Uso

### Desenvolvimento Frontend

Para executar apenas o frontend com live-server:

```bash
live-server
```

Acesse em `http://127.0.0.1:5500`.

### Desenvolvimento Full-Stack

Para executar o servidor backend (Express):

```bash
npm start
```

Acesse em `http://localhost:3000` (ou porta configurada em `server.js`).

### Build de CSS

Para combinar e minificar os arquivos CSS:

```bash
npm run build:css
```

Este comando combina todos os arquivos CSS em `src/css/combined.css` e gera `src/css/main.min.css` minificado.

### Scripts Disponíveis

- `npm start`: Inicia o servidor Express.
- `npm run combine-css`: Combina arquivos CSS em `src/css/combined.css`.
- `npm run build:css`: Combina e minifica CSS.
- `npm test`: Executa testes com Jest.
- `npm run lint`: Executa linting com ESLint e corrige automaticamente.
- `npm run format`: Formata código JavaScript com Prettier.

## Estrutura do Projeto

```text
frontend-project/
├── config/                   # Arquivos de configuração
│   ├── eslint.config.js      # Configuração ESLint
│   └── postcss.config.js     # Configuração PostCSS
├── scripts/                  # Scripts utilitários
│   └── combine-css.js        # Script para combinar CSS
├── src/                      # Código fonte organizado
│     ├── css/                  # Estilos CSS
│     │   ├── animations.css    # Animações CSS
│     │   ├── base.css          # Estilos base
│     │   ├── combined.css      # CSS combinado (gerado)
│     │   ├── main.css          # Estilos principais
│     │   ├── main.min.css      # CSS minificado (gerado)
│     │   └── views/            # Estilos específicos por view
│     │       ├── blog.css
│     │       ├── contato.css
│     │       ├── dark-mode.css
│     │       ├── footer.css
│     │       ├── home.css
│     │       ├── nav.css
│     │       ├── projetos.css
│     │       └── sobre.css
│     ├── images/                # Imagens e ícones
│     │   ├── icons/
│     │   └── photos/
│     ├── js/                    # Scripts JavaScript
│     │   ├── modules/           # Módulos JS
│     │   │   ├── contato.js
│     │   │   └── router.js
│     │   └── utils/             # Utilitários JS
│     │       ├── dark-mode.js
│     │       └── interact.js
│     └── views/                 # Templates HTML
│         └── pages/             # Páginas HTML
│             ├── 404.html
│             ├── blog.html
│             ├── contato.html
│             ├── home.html
│             ├── projetos.html
│             └── sobre.html
├── tests/                    # Testes automatizados
│   └── server.test.js        # Testes do servidor
├── .gitignore
├── LICENSE.md                # Licença do projeto (CC BY-NC-ND 4.0)
├── README.md                 # Este arquivo
├── SOBRE.md                  # Detalhes da proposta do projeto
├── app.js                    # Lógica JavaScript do frontend
├── index.html                # Página principal
├── package-lock.json         # Lockfile do npm
├── package.json              # Configuração do projeto Node.js
├── server.js                 # Servidor backend (Express) 
```

## Funcionalidades

- **Página Inicial**: Informações sobre a ONG, missão, visão e contato.
- **Projetos Sociais**: Listagem de projetos, oportunidades de voluntariado e doações.
- **Contato**: Formulário de contato com validação.
- **Sobre**: Informações sobre a ONG.
- **Blog**: Artigos e notícias.
- **Modo Escuro**: Alternância entre temas claro e escuro.
- **Backend Simples**: API básica com dados mock para simular funcionalidades.
- **SPA Básica**: Navegação sem recarregar a página usando JavaScript.

### Desenvolvimento

#### Linting e Formatação

Para verificar e corrigir código JavaScript:

```bash
npm run lint
```

Para formatar código:

```bash
npm run format
```

#### Testes

O projeto inclui testes básicos para o servidor backend usando Jest e Supertest.

```bash
npm test
```

#### CI/CD

O projeto utiliza GitHub Actions para integração contínua. O workflow executa linting, testes e build em push e pull requests para as branches `main`.

### PostCSS

O projeto usa PostCSS para processar CSS, com plugins para aninhamento, autoprefixer e minificação. Configurado em `postcss.config.js`.


## Acessibilidade

O projeto segue as diretrizes WCAG 2.1 Nível AA, incluindo:

- Navegação por teclado completa.
- Estruturas semânticas adequadas (headings, landmarks, roles).
- Contraste de cores adequado.
- Labels associados a todos os campos de formulário.
- Suporte a leitores de tela com ARIA labels quando necessário.
- Modo escuro acessível.

## Contribuição

1. Fork o projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'feat: adicionar nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

Siga as convenções de commit semântico e execute linting/formatação antes de submeter.

## Licença

Este projeto está licenciado sob os termos da [LICENSE.md](LICENSE.md) (CC BY-NC-ND 4.0).

## Autor

Yuri Machado Luz

## Contato

Para dúvidas ou sugestões, abra uma issue no [GitHub](https://github.com/Yuri-Machado-Luz/frontend-project/issues).
