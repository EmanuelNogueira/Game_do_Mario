// Armazenei no "const mario" a classe mario.
// O querrySelector pegar o elemento, e nesse caso
// pegando uma classe definindo um ponto (.)
const mario = document.querySelector(".mario");

// Estou adicionando meio que uma função nessa constante
// Ela tem a função de adicionar o "jump" na imagem mário
// Ela quem move o mário
const jump = () => {
  mario.classList.add("jump");

  // Função anônima
  setTimeout(() => {
    // Quando a animação terminar, a classe será removida
    // Da imagem do mario
    mario.classList.remove("jump");
    // 800: são 800m/s de tempo para remover a classe
  }, 800);
};

// Ele irá pegar os eventos do teclado e definir
// Qual tecla pegar, logo após o que irá executar
document.addEventListener("click", jump);
