const loader = document.getElementById('main-container');
window.addEventListener('load', () => {
  setTimeout(() => {
    loader.style.display = 'none';
  }, 1000); //1s
});