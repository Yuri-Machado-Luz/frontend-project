# Frontend Project

Projeto desenvolvido como requisito para conclusão do curso em Análise e Desenvolvimento de Sistemas. Este projeto cria uma plataforma web completa para ONGs gerenciarem atividades, divulgar projetos, captar recursos e engajar voluntários, aplicando conceitos de HTML5, CSS3 e JavaScript.

Para mais detalhes sobre a proposta e entregas, consulte [SOBRE.md](SOBRE.md).

## Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

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

3. Instale o live-server globalmente (opcional para desenvolvimento frontend):

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

Acesse em `http://localhost:3000` (ou porta configurada em server.js).

## Estrutura do Projeto

```text
frontend-project/
├
├── src/                   # Código fonte organizado
│   ├── css/               # Estilos CSS
│   ├── images/            # Imagens e ícones
│   ├── js/                # Scripts JavaScript
│   └── views/             # Templates HTML
├
├── .gitignore             # Arquivos ignorados pelo Git
├── app.js                 # Lógica JavaScript do frontend
├── index.html             # Página principal
├── LICENSE.md             # Licença do projeto
├── package.json           # Configuração do projeto Node.js
├── README.md              # Este arquivo
├── server.js              # Servidor backend (Express)
└── SOBRE.md               # Detalhes da proposta do projeto
```

## Funcionalidades

- **Página Inicial**: Informações sobre a ONG, missão, visão e contato.
- **Projetos Sociais**: Listagem de projetos, oportunidades de voluntariado e doações.
- **Cadastro**: Formulário para registro de usuários com validação.
- **Backend Simples**: API básica com dados mock para simular funcionalidades.

## Status do Projeto

- **Branch Atual**: `active/dev`
- **Pull Request Ativo**: [update: esqueleto básico](https://github.com/Yuri-Machado-Luz/frontend-project/pull/1)
- **Entregas**: Baseado em unidades do curso (ver [SOBRE.md](SOBRE.md) para detalhes).

## Contribuição

1. Fork o projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'feat: adicionar nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

Siga as convenções de commits e boas práticas descritas em [copilot-instructions.md](.github/copilot-instructions.md).

## Licença

Este projeto está licenciado sob os termos da [LICENSE.md](LICENSE.md).

## Autor

Yuri Machado Luz

## Contato

Para dúvidas ou sugestões, abra uma issue no [GitHub](https://github.com/Yuri-Machado-Luz/frontend-project/issues).
