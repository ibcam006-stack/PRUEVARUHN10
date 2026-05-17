document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // HEADER SMART SCROLL (APPLE STYLE)
  // ===============================
  const header = document.querySelector(".header");

  if (header) {

    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {

      const currentScrollY = window.scrollY;

      // siempre visible arriba del todo
      if (currentScrollY <= 10) {
        header.classList.remove("hidden");
        lastScrollY = currentScrollY;
        return;
      }

      // scroll hacia abajo → ocultar
      if (currentScrollY > lastScrollY) {
        header.classList.add("hidden");
      }

      // scroll hacia arriba → mostrar
      else {
        header.classList.remove("hidden");
      }

      lastScrollY = currentScrollY;
    });
  }

  // ===============================
  // SCROLL REVEAL ANIMATION
  // ===============================
  const blocks = document.querySelectorAll(".block");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, {
    threshold: 0.1
  });

  blocks.forEach(block => {
    block.style.opacity = "0";
    block.style.transform = "translateY(20px)";
    block.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(block);
  });

  // ===============================
  // FORMULARIO RUH VALIDACIÓN
  // ===============================
  const form = document.querySelector(".form");
  const btn = form ? form.querySelector("button") : null;

  if (form && btn) {

    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const inputs = form.querySelectorAll("input, textarea, select");
      let empty = false;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          empty = true;
        }
      });

      if (empty) {
        showMessage("⚠️ Por favor completa todos los campos.");
        return;
      }

      btn.style.transform = "scale(0.96)";

      setTimeout(() => {
        btn.style.transform = "scale(1)";
        showMessage("✅ Mensaje enviado correctamente a RUH");
        form.reset();
      }, 120);
    });
  }

  // ===============================
  // NOTIFICACIÓN
  // ===============================
  function showMessage(text) {

    const msg = document.createElement("div");

    msg.textContent = text;

    msg.style.position = "fixed";
    msg.style.bottom = "30px";
    msg.style.left = "50%";
    msg.style.transform = "translateX(-50%)";
    msg.style.background = "#1d1d1f";
    msg.style.color = "#fff";
    msg.style.padding = "12px 18px";
    msg.style.borderRadius = "999px";
    msg.style.fontSize = "14px";
    msg.style.zIndex = "9999";
    msg.style.opacity = "0";
    msg.style.transition = "opacity 0.3s ease, transform 0.3s ease";

    document.body.appendChild(msg);

    setTimeout(() => {
      msg.style.opacity = "1";
      msg.style.transform = "translateX(-50%) translateY(-5px)";
    }, 50);

    setTimeout(() => {
      msg.style.opacity = "0";
      msg.style.transform = "translateX(-50%) translateY(10px)";
    }, 2500);

    setTimeout(() => {
      msg.remove();
    }, 3000);
  }

});