const main = document.querySelector('main');
const header = document.querySelector('header');
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');

// hamburger functionality
hamburger.addEventListener('click', () => {
  nav.classList.contains('nav--visible')
    ? nav.classList.remove('nav--visible')
    : nav.classList.add('nav--visible');
});

// header shrink if not scrolled to the top
const checkScroll = () => {
  if (
    document.body.scrollTop > header.clientHeight ||
    document.documentElement.scrollTop > header.clientHeight
  ) {
    header.classList.add('header-shrink');
  } else {
    header.classList.remove('header-shrink');
  }
};
checkScroll(); // check on page load
window.onscroll = () => {
  checkScroll(); // check on scroll
};

// set margin top of main to the header height
main.style.marginTop = header.clientHeight + 'px';
