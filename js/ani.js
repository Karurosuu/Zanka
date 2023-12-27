const animatedElement = document.getElementById("animatedElement");

function checkScroll() {
  const elementPosition = animatedElement.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (elementPosition < screenHeight * 0.75) {
    animatedElement.classList.add("appear");
    window.removeEventListener("scroll", checkScroll);
  }
}

window.addEventListener("scroll", checkScroll);
checkScroll(); // Verifica a posição inicial ao carregar a página
