// hamburger functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
hamburger.addEventListener('click', () => {
  nav.classList.contains('hidden')
    ? nav.classList.remove('hidden')
    : nav.classList.add('hidden');
});
