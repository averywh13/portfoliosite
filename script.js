const toggleButton = document.getElementById('menuToggle');
const nav = document.getElementById('verticalNav');

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('show');
});