let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Go to the last slide
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Go to the first slide
    }

    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}
