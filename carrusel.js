// script.js
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // Oculta todas las diapositivas
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Muestra la diapositiva actual
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Mostrar la primera diapositiva al cargar la página
showSlide(currentSlide);