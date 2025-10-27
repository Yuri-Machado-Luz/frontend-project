// Validação do formulário de contato
export const validarFormulario = () => {
  const form = document.getElementById("cadastro-form");
  if (!form) return;

  // Máscaras para inputs
  const aplicarMascaraCPF = (valor) => {
    return valor
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  const aplicarMascaraTelefone = (valor) => {
    return valor
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4,5})(\d{4})$/, "$1-$2");
  };

  const aplicarMascaraCEP = (valor) => {
    return valor.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1-$2");
  };

  // Aplicar máscaras
  document.getElementById("cpf").addEventListener("input", (e) => {
    e.target.value = aplicarMascaraCPF(e.target.value);
  });

  document.getElementById("telefone").addEventListener("input", (e) => {
    e.target.value = aplicarMascaraTelefone(e.target.value);
  });

  document.getElementById("cep").addEventListener("input", (e) => {
    e.target.value = aplicarMascaraCEP(e.target.value);
  });

  // Validações
  const validarCampo = (campo, erroId, mensagem) => {
    const erroElement = document.getElementById(erroId);
    if (!campo.checkValidity()) {
      erroElement.textContent = mensagem || campo.validationMessage;
      campo.classList.add("form__input--error");
      return false;
    } else {
      erroElement.textContent = "";
      campo.classList.remove("form__input--error");
      return true;
    }
  };

  // Validação específica para CPF
  const validarCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]/g, "");
    if (cpf.length !== 11) return false;

    // Verificar se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cpf)) return false;

    // Calcular dígitos verificadores
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
  };

  // Event listeners para validação em tempo real
  const campos = [
    "nome",
    "email",
    "cpf",
    "telefone",
    "data-nascimento",
    "endereco",
    "cep",
    "cidade",
    "estado",
  ];
  campos.forEach((campoId) => {
    const campo = document.getElementById(campoId);
    campo.addEventListener("blur", () => {
      switch (campoId) {
        case "nome":
          validarCampo(
            campo,
            "nome-error",
            "Nome deve ter pelo menos 2 caracteres.",
          );
          break;
        case "email":
          validarCampo(
            campo,
            "email-error",
            "Por favor, insira um e-mail válido.",
          );
          break;
        case "cpf":
          if (!validarCPF(campo.value)) {
            document.getElementById("cpf-error").textContent = "CPF inválido.";
            campo.classList.add("form__input--error");
          } else {
            document.getElementById("cpf-error").textContent = "";
            campo.classList.remove("form__input--error");
          }
          break;
        case "telefone":
          validarCampo(
            campo,
            "telefone-error",
            "Telefone deve estar no formato (00) 00000-0000.",
          );
          break;
        case "data-nascimento":
          const hoje = new Date();
          const nascimento = new Date(campo.value);
          const idade = hoje.getFullYear() - nascimento.getFullYear();
          if (idade < 16) {
            document.getElementById("data-nascimento-error").textContent =
              "Você deve ter pelo menos 16 anos.";
            campo.classList.add("form__input--error");
          } else {
            validarCampo(campo, "data-nascimento-error");
          }
          break;
        default:
          validarCampo(campo, `${campoId}-error`);
      }
    });
  });

  // Validação do formulário no submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let formularioValido = true;

    // Validar todos os campos
    formularioValido &= validarCampo(
      document.getElementById("nome"),
      "nome-error",
      "Nome é obrigatório.",
    );
    formularioValido &= validarCampo(
      document.getElementById("email"),
      "email-error",
      "E-mail é obrigatório.",
    );
    formularioValido &= validarCPF(document.getElementById("cpf").value);
    formularioValido &= validarCampo(
      document.getElementById("telefone"),
      "telefone-error",
      "Telefone é obrigatório.",
    );
    formularioValido &= validarCampo(
      document.getElementById("data-nascimento"),
      "data-nascimento-error",
      "Data de nascimento é obrigatória.",
    );
    formularioValido &= validarCampo(
      document.getElementById("endereco"),
      "endereco-error",
      "Endereço é obrigatório.",
    );
    formularioValido &= validarCampo(
      document.getElementById("cep"),
      "cep-error",
      "CEP é obrigatório.",
    );
    formularioValido &= validarCampo(
      document.getElementById("cidade"),
      "cidade-error",
      "Cidade é obrigatória.",
    );
    formularioValido &= validarCampo(
      document.getElementById("estado"),
      "estado-error",
      "Estado é obrigatório.",
    );

    // Validar interesse
    const interesse = document.querySelector('input[name="interesse"]:checked');
    if (!interesse) {
      document.getElementById("interesse-error").textContent =
        "Selecione uma opção de interesse.";
      formularioValido = false;
    } else {
      document.getElementById("interesse-error").textContent = "";
    }

    if (formularioValido) {
      // Simular envio
      alert("Formulário enviado com sucesso! Entraremos em contato em breve.");
      form.reset();
    } else {
      alert("Por favor, corrija os erros no formulário antes de enviar.");
    }
  });
};
