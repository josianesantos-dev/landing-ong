function copiarPix() {
  const pix = document.getElementById("pixKey").innerText;

  navigator.clipboard.writeText(pix).then(() => {
    alert("Chave PIX copiada com sucesso!");
  });
}

/* CARROSSEL */
let index = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide() {
  slides.forEach((s) => s.classList.remove("active"));

  slides[index].classList.add("active");

  index++;

  if (index >= slides.length) {
    index = 0;
  }
}

if (slides.length > 0) {
  mostrarSlide();
  setInterval(mostrarSlide, 2500);
}
