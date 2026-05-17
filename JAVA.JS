// ===============================
// DETECTAR MÓVIL (solo informativo)
// ===============================
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);


// ===============================
// HEADER EFECTO SCROLL
// ===============================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    // Fondo activo
    if (window.scrollY > 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }

    // Mostrar / ocultar header
    if (window.scrollY > 120) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

});


// ===============================
// ANIMACIÓN AL CARGAR
// ===============================
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


// ===============================
// MENÚ MOBILE
// ===============================
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("mobile-active");
    });

}


// ===============================
// CERRAR MENÚ AL CLICK
// ===============================
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        // Scroll interno
        if (targetId && targetId.startsWith("#")) {

            e.preventDefault();

            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        }

        // Cerrar menú mobile
        if (window.innerWidth <= 768 && navbar) {
            navbar.classList.remove("mobile-active");
        }

    });

});


// ===============================
// BOTÓN CHAT
// ===============================
const chatButton = document.querySelector(".chat-button");

if (chatButton) {

    chatButton.addEventListener("click", () => {
        alert("Chat próximamente disponible.");
    });

}


// ===============================
// PARALLAX HERO
// ===============================
const heroImage = document.querySelector(".hero-image img");

if (heroImage && window.innerWidth > 768) {

    window.addEventListener("scroll", () => {
        heroImage.style.transform = `translateY(${window.scrollY * 0.08}px)`;
    });

}


// ===============================
// FIREBASE CONFIG
// ===============================
const firebaseConfig = {
    apiKey: "AIzaSyD-ZuIk80pjmS0eGRvbda_n1k6ihjKbSXs",
    authDomain: "revista-bfaa2.firebaseapp.com",
    projectId: "revista-bfaa2",
    storageBucket: "revista-bfaa2.firebasestorage.app",
    messagingSenderId: "686451444613",
    appId: "1:686451444613:web:b4964e15160aa5747392ec",
    measurementId: "G-9N8T4P05HV"
};


// ===============================
// INIT FIREBASE
// ===============================
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();


// ===============================
// PERSISTENCIA
// ===============================
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .catch((error) => {
        console.log("Persistence error:", error);
    });


// ===============================
// GOOGLE PROVIDER
// ===============================
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});


// ===============================
// LOGIN GOOGLE
// ===============================
const googleLogin = document.getElementById("google-login");

if (googleLogin) {

    googleLogin.addEventListener("click", async () => {

        try {

            const result = await auth.signInWithPopup(provider);

            const user = result.user;

            console.log("LOGIN OK:", user);

            googleLogin.innerHTML = `Hola, ${user.displayName}`;

        } catch (error) {

            console.log("ERROR LOGIN:", error);

            alert(error.message);

        }

    });

}


// ===============================
// ESTADO DE SESIÓN
// ===============================
auth.onAuthStateChanged((user) => {

    if (user && googleLogin) {
        googleLogin.innerHTML = `Hola, ${user.displayName}`;
    }

});


// ===============================
// REVEAL CARDS
// ===============================
const cards = document.querySelectorAll(".article-card");

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.8s ease";

});

const revealCards = () => {

    const triggerBottom = window.innerHeight * 0.9;

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }

    });

};

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);


// ===============================
// LINKS DE ARTÍCULOS
// ===============================
const readButtons = document.querySelectorAll(".read-more");

readButtons.forEach((btn) => {

    btn.addEventListener("click", () => {

        // Cerrar menú mobile si está abierto
        if (window.innerWidth <= 768 && navbar) {
            navbar.classList.remove("mobile-active");
        }

        // El enlace abrirá normalmente
        // NO usar preventDefault()

    });

});