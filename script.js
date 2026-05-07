function copiarPix() {
  const pix = document.getElementById("pixKey").innerText;

  navigator.clipboard.writeText(pix).then(() => {
    alert("PIX copiado!");
  });
}

/* CARROSSEL COVERFLOW SIMPLES */
let index = 0;
const slides = document.querySelectorAll(".slide");

function atualizarCarrossel() {
  slides.forEach(s => s.classList.remove("active"));

  slides[index].classList.add("active");

  index++;
  if (index >= slides.length) index = 0;
}

setInterval(atualizarCarrossel, 2500);

/* POPUP DE DOAÇÃO */
const mensagens = [
  "❤️ Ana acabou de doar R$20",
  "💛 Maria ajudou uma família",
  "✨ Novo apoio recebido"
];

function mostrarPopup() {
  const popup = document.getElementById("popup");
  const msg = mensagens[Math.floor(Math.random() * mensagens.length)];

  popup.innerText = msg;
  popup.style.opacity = "1";

  setTimeout(() => {
    popup.style.opacity = "0";
  }, 3000);
}

setInterval(mostrarPopup, 5000);
