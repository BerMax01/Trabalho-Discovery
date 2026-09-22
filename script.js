function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // modo claro
    img.setAttribute("src", "./assets/garto-claro.jpg")
  } else {
    // modo escuro
    img.setAttribute("src", "./assets/garto-escuro.jpg")
  }
}