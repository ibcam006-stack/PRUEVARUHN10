// ===============================
// HEADER SHOW / HIDE ON SCROLL
// ===============================

const header = document.getElementById("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    // MOSTRAR SI ESTA ARRIBA
    if(currentScroll <= 0){

        header.classList.remove("hide");
        return;

    }

    // OCULTAR AL BAJAR
    if(currentScroll > lastScroll && currentScroll > 120){

        header.classList.add("hide");

    }

    // MOSTRAR AL SUBIR
    else{

        header.classList.remove("hide");

    }

    lastScroll = currentScroll;

});

// ===============================
// REVEAL ON SCROLL
// ===============================

const reveals = document.querySelectorAll(".reveal");

function revealElements(){

    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {

        const elementTop =
        element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealElements);

window.addEventListener("load", revealElements);

// ===============================
// HERO TITLE ANIMATION
// ===============================

window.addEventListener("load", () => {

    const heroTitle =
    document.querySelector(".hero h1");

    const heroSubtitle =
    document.querySelector(".hero h2");

    if(heroTitle){

        heroTitle.style.opacity = "0";
        heroTitle.style.transform = "translateY(40px)";

        setTimeout(() => {

            heroTitle.style.transition =
            "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)";

            heroTitle.style.opacity = "1";
            heroTitle.style.transform = "translateY(0)";

        }, 200);

    }

    if(heroSubtitle){

        heroSubtitle.style.opacity = "0";
        heroSubtitle.style.transform = "translateY(25px)";

        setTimeout(() => {

            heroSubtitle.style.transition =
            "all 1.4s cubic-bezier(0.16, 1, 0.3, 1)";

            heroSubtitle.style.opacity = "1";
            heroSubtitle.style.transform = "translateY(0)";

        }, 450);

    }

});

// ===============================
// IMAGE HOVER EFFECT
// ===============================

const articleImages =
document.querySelectorAll(".image-block img");

articleImages.forEach((image) => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.02)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

// ===============================
// FEATURE IMAGE PARALLAX
// ===============================

const featureImage =
document.querySelector(".feature-image img");

window.addEventListener("scroll", () => {

    if(featureImage){

        const scrollY = window.scrollY;

        featureImage.style.transform =
        `translateY(${scrollY * 0.03}px)`;

    }

});

// ===============================
// BLOCKQUOTE EFFECT
// ===============================

const quotes =
document.querySelectorAll("blockquote");

quotes.forEach((quote) => {

    quote.addEventListener("mouseenter", () => {

        quote.style.transform =
        "translateX(10px)";

    });

    quote.addEventListener("mouseleave", () => {

        quote.style.transform =
        "translateX(0px)";

    });

});

// ===============================
// NAVIGATION EFFECT
// ===============================

const navLinks =
document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

    link.addEventListener("mouseenter", () => {

        link.style.opacity = "0.6";

    });

    link.addEventListener("mouseleave", () => {

        link.style.opacity = "1";

    });

});

// ===============================
// PDF BUTTON EFFECT
// ===============================

const pdfButton =
document.querySelector(".pdf-button");

if(pdfButton){

    pdfButton.addEventListener("mouseenter", () => {

        pdfButton.style.transform =
        "scale(1.05)";

    });

    pdfButton.addEventListener("mouseleave", () => {

        pdfButton.style.transform =
        "scale(1)";

    });

}