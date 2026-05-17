// ===============================
// DOM READY
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // TOPBAR SCROLL EFFECT
    // ===============================

    const topbar = document.getElementById("topbar");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 40){
            topbar.classList.add("scrolled");
        } else{
            topbar.classList.remove("scrolled");
        }

    });

    // ===============================
    // FADE IN ANIMATION
    // ===============================

    const animatedElements = document.querySelectorAll(`
        .intro-container,
        .content-grid,
        .quote-container,
        .large-image-container,
        .closing-container,
        .image-full img,
        .fullscreen-image img
    `);

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    animatedElements.forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });

    // ===============================
    // HERO PARALLAX EFFECT
    // ===============================

    const heroImage = document.querySelector(".hero-background img");

    window.addEventListener("scroll", () => {

        const scroll = window.scrollY;

        heroImage.style.transform = `scale(1.05) translateY(${scroll * 0.15}px)`;

    });

});


// ===============================
// ADDITIONAL ANIMATION STYLES
// ===============================

const style = document.createElement("style");

style.innerHTML = `

.hidden{
    opacity: 0;
    transform: translateY(80px);
    transition:
        opacity 1.2s ease,
        transform 1.2s ease;
}

.show{
    opacity: 1;
    transform: translateY(0);
}

`;

document.head.appendChild(style);