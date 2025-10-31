const btn = document.querySelector(".btn-whatsapp");
let startX = 0;

btn.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

btn.addEventListener("touchmove", (e) => {
  const currentX = e.touches[0].clientX;
  const diff = currentX - startX;

  // Se arrastar mais que 50px (esquerda ou direita)
  if (Math.abs(diff) > 50) {
    btn.style.transition = "0.4s";
    btn.style.transform = `translateX(${diff > 0 ? "200px" : "-200px"})`;
    btn.style.opacity = "0";
  }
});
