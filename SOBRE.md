# Projeto de Desenvolvimento Front-End

Projeto desenvolvido como requisito para conclusão do curso em Análise e Desenvolvimento de Sistemas. Este projeto abrange tanto o desenvolvimento do frontend quanto do backend.

## Proposta

Desenvolver uma plataforma web completa e profissional que permita a ONGs gerenciar suas atividades, divulgar projetos, captar recursos e engajar voluntários, aplicando, de forma integrada, todos os conceitos estudados nas quatro unidades da disciplina.

Links rápidos para as unidades de entrega:

- [Primeira Entrega](#primeira-entrega)
- [Segunda Entrega](#segunda-entrega)
- [Terceira Entrega](#terceira-entrega)
- [Quarta Entrega](#quarta-entrega)

### Objetivo Específicos

- Aplicar fundamentos de HTML5 na criação de estruturas semânticas complexas;

- Implementar leiautes responsivos e sistemas de design usando CSS3 avançado;

- Desenvolver funcionalidades interativas e dinâmicas com JavaScript;

- Integrar ferramentas de versionamento, acessibilidade e infraestrutura web;

- Simular um ambiente de desenvolvimento profissional com metodologias ágeis;

- Produzir documentação técnica de qualidade profissional.

A escolha de uma plataforma para ONGs oferece múltiplas personas (administradores, voluntários, doadores), diversas funcionalidades (dashboard, doações, projetos) e requisitos técnicos variados (responsividade, acessibilidade, desempenho), garantindo que todos os conceitos da disciplina sejam aplicados de forma significativa.

## Visão Geral da Plataforma

A plataforma será um sistema web completo que oferece às ONGs uma presença digital profissional e funcional. O sistema deve contemplar diferentes tipos de usuários e funcionalidades específicas para cada perfil.

### Personas e Casos de Uso

- Administrador da ONG: gerenciar informações institucionais; cadastrar e editar projetos; acompanhar métricas de engajamento; gerenciar voluntários e doações;

- Voluntário: descobrir oportunidades de voluntariado; candidatar-se a projetos; acompanhar histórico de participação; compartilhar experiências.

- Doador/apoiador: conhecer projetos e impactos; realizar doações on-line; acompanhar aplicação de recursos; receber relatórios de transparência;

- Visitante: conhecer a organização e seus projetos; acessar informações de contato; visualizar galeria de atividades; compartilhar conteúdo em redes sociais.

### Funcionalidades Principais

- Área institucional: página inicial com missão, visão e valores; histórico e conquistas da organização; equipe e estrutura organizacional; relatórios de transparência;

- Gestão de projetos: cadastro detalhado de projetos sociais; galeria de fotos e vídeos; indicadores de impacto e resultados; sistema de categorização;

- Engajamento de voluntários: portal de oportunidades de voluntariado; sistema de inscrição e seleção; área do voluntário com histórico; certificados digitais de participação;

- Captação de recursos: campanhas de arrecadação; sistema de doações on-line; metas e progresso em tempo real; relatórios de prestação de contas;

- Comunicação e transparência: blog com notícias e atualizações; newsletter para engajamento; área de imprensa com releases; central de documentos públicos.

### Requisitos Técnicos Gerais

- Responsividade: design mobile-first; compatibilidade com tablets e desktops; breakpoints bem definidos; imagens e mídias adaptáveis;

- Desempenho: tempo de carregamento inferior a 5 segundos; otimização de imagens e recursos; lazy loading para conteúdo extenso; minificação de CSS e JavaScript;

- Acessibilidade: conformidade com WCAG 2.1 nível AA; navegação por teclado; suporte a leitores de tela; contraste adequado de cores;

- Segurança: implementação de HTTPS; validação de formulários;

- SEO e descoberta: meta tags otimizadas; estrutura semântica adequada.

## PRIMEIRA ENTREGA

### Objetivos 1

Esta primeira entrega foca na aplicação dos fundamentos de HTML5 estudados na Unidade, estabelecendo a base estrutural sólida para toda a plataforma. Os alunos devem demonstrar domínio completo dos conceitos de semântica, formulários e multimídia.

#### Especificações Técnicas Obrigatórias

- Estrutura HTML5 Semântica
Implementar no mínimo 3 páginas HTML com estrutura semântica completa;
Aplicar hierarquia de títulos de forma lógica e consistente, para cada página utilizar imagens.

- Páginas Obrigatórias
Página inicial (index.html) que fala sobre a organização, com informações de contato;
Projetos sociais (projetos.html), abordando o voluntariado e como doar;
Cadastro (cadastro.html).

- Formulários Complexos e Interativos
Criar um formulário na página (cadastro.html) utilizando tipos de input HTML5 (Nome Completo, e-mail, CPF, telefone, Data de Nascimento,
Endereço, CEP, Cidade e Estado);
Implementar validação nativa com atributos HTML5;
Utilizar agrupamento lógico;
Aplicar máscaras de input para CPF, telefone, CEP.

#### O que deverá ser entregue

1. Código Fonte Completo
Estrutura de pastas organizada (pastas, HTML e imagens);
Arquivos HTML validados (W3C Validator).

2. Assets e Recursos
Imagens otimizadas em múltiplos formatos.

3. Forma de Entrega
Link PÚBLICO do projeto no GitHub, com todo o código fonte e os arquivos HTML e imagens organizados em pastas.

## SEGUNDA ENTREGA

### Objetivos 2

Esta segunda entrega concentra-se na aplicação de CSS3 para transformar a estrutura HTML da Entrega I em uma interface visual profissional, responsiva e acessível. Os alunos devem demonstrar domínio de leiautes modernos, sistemas de design e técnicas de estilização.

#### Especificações Técnicas Obrigatórias 2

- Sistema de Design
Desenvolver design system consistente com variáveis CSS customizadas;
Definir paleta de cores com no mínimo 8 cores (primárias, secundárias, neutras);
Estabelecer tipografia hierárquica com no mínimo 5 tamanhos de fonte;
Criar sistema de espaçamento modular (8px, 16px, 24px, 32px, 48px, 64px).

- Leiautes Responsivos com Flexbox e Grid
Implementar leiaute principal usando CSS grid para estrutura geral;
Utilizar flexbox para componentes internos e alinhamentos;
Criar no mínimo 5 breakpoints responsivos bem definidos;
Desenvolver sistema de grid customizado (12 colunas);
Implementar leiautes específicos para diferentes tipos de conteúdo.

- Navegação Sofisticada e Interativa
Criar menu principal responsivo com submenu dropdown;
Implementar navegação mobile com menu hambúrguer.

- Componentes de Interface
Desenvolver sistema de cards responsivos para projetos;
Criar botões com estados visuais (hover, focus, active, disabled);
Implementar formulários estilizados com validação visual;
Desenvolver componentes de feedback (alerts, toasts, modals);
Criar sistema de badges e tags para categorização.

#### O que deverá ser entregue 2

1. CSS Organizados
Estrutura de pastas organizada (pastas, HTML, imagens e CSS);
Estrutura modular de CSS.

2. Forma de Entrega
Link PÚBLICO do projeto no GitHub, com todo o código fonte e os arquivos HTML e imagens organizados em pastas.

Acrescente no mesmo projeto a pasta com os arquivos do CSS.

## TERCEIRA ENTREGA

### Objetivos 3

Esta terceira entrega foca na implementação de JavaScript avançado para transformar a interface estática em uma aplicação web dinâmica e interativa. Os alunos devem demonstrar domínio de manipulação do DOM, eventos, armazenamento local e integração com frameworks, criando funcionalidades que simulem uma aplicação real.

#### Especificações Técnicas Obrigatórias 3

- Manipulação do DOM
Implementar sistema de Single Page Application (SPA) básico;
Criar sistema de templates JavaScript.

Funcionalidades Específicas Obrigatórias

Sistema de verificação de consistência de dados em formulários, com aviso ao usuário de preenchimento incorreto.

#### O que deverá ser entregue 3

1. Código JavaScript Modular
Estrutura de pastas organizada (pastas, HTML, imagens, CSS e JS);
No arquivo organizar os códigos por funcionalidade.

2. Forma de Entrega
Link PÚBLICO do projeto no GitHub, com todo o código fonte, os arquivos HTML, imagens e CSS organizados em pastas.

Acrescente no mesmo projeto a pasta com os arquivos JavaScript(js).

## QUARTA ENTREGA

### Objetivos 4

Esta entrega final consolida todo o projeto através da implementação de práticas profissionais de versionamento, acessibilidade e deploy em ambiente de produção. Os alunos devem apresentar conhecimento de Git/GitHub, conformidade com WCAG 2.1, otimização para produção e documentação técnica.

### Especificações Técnicas Obrigatórias 4

- Controle de Versão com Git/GitHub
Implementar estratégia de branching GitFlow;
Criar histórico de commits semântico e organizado;
Desenvolver sistema de releases com versionamento semântico.

- Acessibilidade (WCAG 2.1 Nível AA)
Implementar navegação por teclado em todos os componentes;
Criar estrutura semântica adequada;
Garantir contraste mínimo de 4.5:1 para texto normal;
Implementar suporte completo para leitores de tela;
Criar versão de alto contraste e modo escuro acessível.

- Otimização para Produção
Implementar minificação de CSS, JavaScript e HTML;
Configurar compressão de imagens.

#### O que deverá ser entregue 4

1. Repositório GitHub Completo
Código fonte versionado;
Histórico de commits organizado;
Pull Requests documentados;
Issues e milestones utilizados.

2. Documentação Técnica
README profissional completo.

3. Forma de Entrega
Link PÚBLICO do repositório do GitHub com os arquivos do projeto e arquivo Read na raiz do repositório com conteúdo completo do projeto desenvolvido até aqui, equivalente ao da entrega anterior, acrescentando os entregáveis desta fase.
