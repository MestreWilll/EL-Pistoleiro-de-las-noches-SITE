function alterarBackground() {
  document.body.style.backgroundColor = '#a73c3c';
  document.body.style.backgroundImage = 'url(./Imagens/El Pistoleiro criando vida.gif)';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
}

function centralizarTitulo() {
  const titulo = document.getElementById('titulo');
  titulo.style.position = 'absolute';
  titulo.style.top = '50%';
  titulo.style.left = '50%';
  titulo.style.transform = 'translate(-50%, -50%)';
  titulo.style.textAlign = 'center';
}
function estilizarTitulo() {
  const titulo = document.getElementById('titulo');
  titulo.style.color = 'rgb(255, 255, 255)';
  titulo.style.textAlign = 'center';
  titulo.style.position = 'absolute';
  titulo.style.top = '50%';
  titulo.style.left = '50%';
  titulo.style.transform = 'translate(-50%, -50%)';
}
