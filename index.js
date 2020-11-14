// hamburger functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
hamburger.addEventListener('click', () => {
  nav.classList.contains('hidden')
    ? nav.classList.remove('hidden')
    : nav.classList.add('hidden');
});

// header shrink on scroll
const header = document.querySelector('header');
window.onscroll = () => {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    header.classList.add('header-shrink');
  } else {
    header.classList.remove('header-shrink');
  }
};
