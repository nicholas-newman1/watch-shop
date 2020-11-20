// hamburger functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
hamburger.addEventListener('click', () => {
  nav.classList.contains('nav--visible')
    ? nav.classList.remove('nav--visible')
    : nav.classList.add('nav--visible');
});

// header shrink if not scrolled to the top
const header = document.querySelector('header');
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
const main = document.querySelector('main');
main.style.marginTop = header.clientHeight + 'px';