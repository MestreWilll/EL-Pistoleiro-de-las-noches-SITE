window.addEventListener("load", function () {
  estilizarTitulo();
  posicionarTitulo();
});

function estilizarTitulo() {
  var titulo = document.getElementById("titulo");
  titulo.style.fontSize = "40px";
  // Remova a linha abaixo para que o título fique preto
  // titulo.style.color = "red";
}

function posicionarTitulo() {
  var container = document.querySelector(".container");
  var titulo = document.getElementById("titulo");
  var imagens = document.querySelector(".imagens");
  var imagem = document.getElementById("imagem1");
  var larguraImagem = imagem.offsetWidth;

  titulo.style.width = larguraImagem + "px";
  
  // Calcular a altura do título e das imagens
  var tituloHeight = titulo.offsetHeight;
  var imagensHeight = imagens.offsetHeight;
  
  // Aplicar a altura calculada ao container
  container.style.minHeight = (tituloHeight + imagensHeight) + "px";
}