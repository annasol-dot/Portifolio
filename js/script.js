// Pegando os elementos do HTML pelo id
var temaBtn = document.getElementById("temaBtn");
var formulario = document.getElementById("formulario");
var raiz = document.documentElement;   // é a tag <html>


// Função 1: troca entre tema escuro e claro
function alternarTema() {
  var novoTema;

  if (raiz.getAttribute("data-bs-theme") === "light") {
    novoTema = "dark";
  } else {
    novoTema = "light";
  }

  raiz.setAttribute("data-bs-theme", novoTema);
  localStorage.setItem("tema", novoTema);   // guarda a escolha no navegador
}


// Função 2: confere se o formulário foi preenchido
function validarFormulario(evento) {
  evento.preventDefault(); // impede a página de recarregar

  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var mensagem = document.getElementById("mensagem").value;

  if (nome === "" || email === "" || mensagem === "") {
    alert("Preencha todos os campos!");
  } else {
    alert("Obrigada, " + nome + "! Sua mensagem foi enviada.");
    formulario.reset(); // limpa os campos
  }
}


// Ao abrir a página, usa o tema que a pessoa escolheu da última vez
var temaSalvo = localStorage.getItem("tema");
if (temaSalvo) {
  raiz.setAttribute("data-bs-theme", temaSalvo);
}


// Ligando cada função ao evento certo
temaBtn.addEventListener("click", alternarTema);
formulario.addEventListener("submit", validarFormulario);


// Função 3: efeito de digitação do cargo
var cargos = ["Estudante de Ciências da Computação"];
var numeroCargo = 0;
var numeroLetra = 0;
var apagando = false;

function digitar() {
  var textoCompleto = cargos[numeroCargo];
  document.getElementById("cargo").textContent = textoCompleto.substring(0, numeroLetra);

  if (apagando == false) {
    numeroLetra = numeroLetra + 1;
  } else {
    numeroLetra = numeroLetra - 1;
  }

  if (numeroLetra > textoCompleto.length) {
    apagando = true;
    setTimeout(digitar, 1500);   // espera 1,5 s com o texto completo
    return;
  }

  if (numeroLetra < 0) {
    apagando = false;
    numeroCargo = numeroCargo + 1;
    if (numeroCargo == cargos.length) {
      numeroCargo = 0;
    }
    numeroLetra = 0;
  }

  setTimeout(digitar, 80);
}

digitar();