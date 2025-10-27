import { validarFormulario } from "./contato.js";

export const roteador = () => {
  const urlPageTitle = "EducaTEC";

  const routes = {
    404: {
      template: "./src/views/pages/404.html",
      title: "404 | " + urlPageTitle,
      description: "Page not found",
    },
    "/": {
      template: "./src/views/pages/home.html",
      title: urlPageTitle,
      description: "Página inicial do EducaTEC",
    },
    sobre: {
      template: "./src/views/pages/sobre.html",
      title: "Sobre | " + urlPageTitle,
      description: "Página sobre o EducaTEC",
    },
    projetos: {
      template: "./src/views/pages/projetos.html",
      title: "Projetos | " + urlPageTitle,
      description: "Página de projetos do EducaTEC",
    },
    blog: {
      template: "./src/views/pages/blog.html",
      title: "Blog | " + urlPageTitle,
      description: "Página do blog do EducaTEC",
    },
    contato: {
      template: "./src/views/pages/contato.html",
      title: "Contato | " + urlPageTitle,
      description: "Página de contato do EducaTEC",
    },
  };

  const locationHandler = async () => {
    let location = window.location.hash.replace("#", "");
    let anchor = "";

    // Verificar se há âncora
    if (location.includes("#")) {
      [location, anchor] = location.split("#");
    }

    if (location.length == 0) {
      location = "/";
    }

    const rout = routes[location] || routes[404];
    const html = await fetch(rout.template).then((response) => response.text());
    document.getElementById("main-content").innerHTML = html;
    document.title = rout.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", rout.description);

    // Inicializar validação do formulário se estiver na página de contato
    if (location === "contato") {
      // Pequeno delay para garantir que o DOM seja carregado
      setTimeout(() => {
        validarFormulario();
      }, 100);
    }

    // Scroll para âncora se existir
    if (anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    } else {
      // Scroll para o topo se não houver âncora
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Adicionar event listeners aos links de navegação para garantir navegação
  const navLinks = document.querySelectorAll(".nav__links");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      if (href && href !== "#") {
        window.location.hash = href;
      } else if (href === "#") {
        window.location.hash = "";
      }
      // Fechar menu mobile se estiver aberto
      const navMenu = document.querySelector("#nav-menu");
      const hamburgerBtn = document.querySelector("#hamburger-btn");
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        hamburgerBtn.classList.remove("active");
      }
    });
  });

  window.addEventListener("hashchange", locationHandler);

  locationHandler();
};
