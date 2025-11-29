// ===== Aguarda o carregamento da página =====
document.addEventListener("DOMContentLoaded", function () {

  // ===== 1️⃣ Animação de entrada dos cards =====
  const cards = document.querySelectorAll(".card");

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";

    setTimeout(function () {
      card.style.transition = "all 0.6s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 200 * i);
  }

  // ===== 2️⃣ Campo de busca de prestadores =====
  const inputBusca = document.getElementById("busca");

  if (inputBusca) {
    inputBusca.addEventListener("keyup", function () {
      const termo = inputBusca.value.toLowerCase();
      for (let i = 0; i < cards.length; i++) {
        const nome = cards[i].querySelector("h3").textContent.toLowerCase();
        cards[i].style.display = nome.includes(termo) ? "block" : "none";
      }
    });
  }

  // ===== 3️⃣ Botão de modo claro/escuro =====
  const temaBtn = document.getElementById("temaBtn");

  if (temaBtn) {
    temaBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        temaBtn.textContent = "☀️ Modo Claro";
      } else {
        temaBtn.textContent = "🌙 Modo Escuro";
      }
    });
  }

  // ===== 4️⃣ Validação simples de formulários =====
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (event) {
      const email = form.querySelector('input[type="email"]');
      const senha = form.querySelector('input[type="password"]');

      if (email && senha) {
        if (!email.value.includes("@") || senha.value.length < 6) {
          alert("Preencha um e-mail válido e uma senha com pelo menos 6 caracteres.");
          event.preventDefault();
        }
      }
    });
  }
});
