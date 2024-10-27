let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

function changeSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}

// Initial display
showSlides();
setInterval(() => changeSlide(1), 5000); // Change slide every 5 seconds
