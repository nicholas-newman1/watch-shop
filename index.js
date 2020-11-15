// hamburger functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
hamburger.addEventListener('click', () => {
  nav.classList.contains('hidden')
    ? nav.classList.remove('hidden')
    : nav.classList.add('hidden');
});

// header shrink if not scrolled to the top
const header = document.querySelector('header');
const checkScroll = () => {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    header.classList.add('header-shrink');
  } else {
    header.classList.remove('header-shrink');
  }
};
checkScroll(); // check on page load
window.onscroll = () => {
  checkScroll(); // check on scroll
};
