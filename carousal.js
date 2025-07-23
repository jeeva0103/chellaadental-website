//carousel functionality//
const carouselContainer = document.getElementById('carouselTrack');
const forwardButton = document.getElementById('nextBtn');
const backButton = document.getElementById('prevBtn');


// Adjust scroll amount based on screen size
const scrollDistance = window.innerWidth <= 768 ? 280 : 1150; // 282px for mobile, 1000px for larger screens

// Scroll forward
forwardButton.addEventListener('click', () => {
  carouselContainer.scrollBy({ left: scrollDistance, behavior: 'smooth' });
});

// Scroll backward
backButton.addEventListener('click', () => {
  carouselContainer.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
});
