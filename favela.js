// Array com os caminhos das imagens
var images = ['img form/helin.jpg', 'img form/lulu.jpeg', 'img form/paulista.jpeg', 'img form/cueva.jpg', 'img form/pablin.jpg'];

// Função para gerar uma imagem aleatória
function generateRandomImage() {
  var randomIndex = Math.floor(Math.random() * images.length);
  document.getElementById('playerImage').src = images[randomIndex];
}

// Adicionando o ouvinte de eventos ao botão
document.getElementById('submitBtn').addEventListener('click', generateRandomImage);