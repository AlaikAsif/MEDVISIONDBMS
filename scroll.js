// slider.js

function navigateToSlide(event, slideNumber) {
    event.preventDefault(); // Prevent default anchor behavior
    var slider = document.querySelector('.slider');
    var slide = document.getElementById('slide-' + slideNumber);
    if (!slider || !slide) return; // Ensure slider and slide elements exist
    var scrollAmount = slide.offsetLeft - slider.offsetLeft;
    slider.scrollLeft = scrollAmount;
}
