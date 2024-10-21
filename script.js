function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Update slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Move the slides container
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
