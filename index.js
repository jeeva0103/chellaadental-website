// const track = document.getElementById('carouselTrack');
// const nextBtn = document.getElementById('nextBtn');
// const prevBtn = document.getElementById('prevBtn');

// nextBtn.addEventListener('click', () => {
//   track.scrollBy({ left: 1000, behavior: 'smooth' });
// });

// prevBtn.addEventListener('click', () => {
//   track.scrollBy({ left: -1000, behavior: 'smooth' });
// });



  const scrollBtn = document.getElementById('scrollToTopBtn');
  const scrollValue = document.getElementById('scrollProgress');

  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercent = Math.round((scrollTop / docHeight) * 100);

    // Update percentage or icon dynamically
    if (scrollTop > 100) {
      scrollBtn.style.display = "flex";
      
    } else {
      scrollBtn.style.display = "none";
    }
  });

  // Scroll to top on click
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });




