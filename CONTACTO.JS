document.addEventListener("DOMContentLoaded", () => {
// ===============================
// HEADER APARECE SOLO ARRIBA
// ===============================
let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  const currentScroll = window.pageYOffset;

  if (!header) return;

  // arriba del todo → siempre visible
  if (currentScroll <= 10) {
    header.style.transform = "translateY(0)";
    header.style.opacity = "1";
    header.style.pointerEvents = "all";
    lastScroll = currentScroll;
    return;
  }

  // scroll hacia abajo → ocultar
  if (currentScroll > lastScroll) {
    header.style.transform = "translateY(-100%)";
    header.style.opacity = "0";
    header.style.pointerEvents = "none";
  }

  // scroll hacia arriba → mostrar
  else {
    header.style.transform = "translateY(0)";
    header.style.opacity = "1";
    header.style.pointerEvents = "all";
  }

  lastScroll = currentScroll;
});

});

  // ===============================
  // ANIMACIÓN SCROLL REVEAL
  // ===============================
  const blocks = document.querySelectorAll(".block");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  blocks.forEach(block => {
    block.style.opacity = "0";
    block.style.transform = "translateY(20px)";
    block.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(block);
  });


  // ===============================
  // FORMULARIO RUH (VALIDACIÓN)
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
  // MENSAJE TIPO NOTIFICACIÓN
  // ===============================
  function showMessage(text) {

    let msg = document.createElement("div");

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