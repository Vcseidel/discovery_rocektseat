function toggleMode() {

  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  const text = document.querySelector("#profile img")

  if(html.classList.contains('light')) {

    img.setAttribute("src", "./assets/avatar-light.png")
    text.setAttribute("alt", "Foto de Victor Seidel sorrindo")
  
  } else {
    
    img.setAttribute("src", "./assets/Avatar_1.png")
    text.setAttribute("alt", "Foto de Victor Seidel de camisa verde, com cabelo e barba por fazer, em um fundo branco")
  
  }

 
  

}