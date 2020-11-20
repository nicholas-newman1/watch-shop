// populate shop with listings

const mensListings = [
  {
    id: 0,
    name: 'Black Minimalist Watch',
    price: '$89.99',
    mainImage: {
      src: './images/minimalist-watch-black.webp',
      alt: 'Black minimalist watch',
    },
  },
  {
    id: 1,
    name: 'Silver Minimalist Watch',
    price: '$89.99',
    mainImage: {
      src: './images/minimalist-watch-silver.webp',
      alt: 'Silver minimalist watch',
    },
  },
  {
    id: 2,
    name: 'Black Butterfly Watch',
    price: '$119.99',
    mainImage: {
      src: './images/black-butterfly-watch.webp',
      alt: 'Black butterfly watch',
    },
  },
  {
    id: 3,
    name: 'Gold Buuterfly Watch',
    price: '$119.99',
    mainImage: {
      src: './images/gold-butterfly-watch.webp',
      alt: 'Gold butterfly watch',
    },
  },
  {
    id: 4,
    name: 'Black Digital Watch',
    price: '$69.99',
    mainImage: {
      src: './images/black-digital-watch.webp',
      alt: 'Black digital watch',
    },
  },
  {
    id: 5,
    name: 'Silver Digital Watch',
    price: '$69.99',
    mainImage: {
      src: './images/silver-digital-watch.webp',
      alt: 'Silver digital watch',
    },
  },
  {
    id: 6,
    name: 'Sports Watch',
    price: '$99.99',
    mainImage: {
      src: './images/sports-watch.webp',
      alt: 'Sports watch',
    },
  },
  {
    id: 7,
    name: 'Compass Watch',
    price: '$99.99',
    mainImage: {
      src: './images/black-compass-watch.webp',
      alt: 'Black compass watch',
    },
  },
];

const womensListings = [
  {
    id: 0,
    name: 'Black Minimalist Watch',
    price: '$89.99',
    mainImage: {
      src: './images/minimalist-watch-black.webp',
      alt: 'Black minimalist watch',
    },
  },
  {
    id: 1,
    name: 'Silver Minimalist Watch',
    price: '$89.99',
    mainImage: {
      src: './images/minimalist-watch-silver.webp',
      alt: 'Silver minimalist watch',
    },
  },
  {
    id: 2,
    name: 'Black Butterfly Watch',
    price: '$119.99',
    mainImage: {
      src: './images/black-butterfly-watch.webp',
      alt: 'Black butterfly watch',
    },
  },
  {
    id: 3,
    name: 'Gold Buuterfly Watch',
    price: '$119.99',
    mainImage: {
      src: './images/gold-butterfly-watch.webp',
      alt: 'Gold butterfly watch',
    },
  },
  {
    id: 4,
    name: 'Black Digital Watch',
    price: '$69.99',
    mainImage: {
      src: './images/black-digital-watch.webp',
      alt: 'Black digital watch',
    },
  },
  {
    id: 5,
    name: 'Silver Digital Watch',
    price: '$69.99',
    mainImage: {
      src: './images/silver-digital-watch.webp',
      alt: 'Silver digital watch',
    },
  },
  {
    id: 6,
    name: 'Sports Watch',
    price: '$99.99',
    mainImage: {
      src: './images/sports-watch.webp',
      alt: 'Sports watch',
    },
  },
  {
    id: 7,
    name: 'Compass Watch',
    price: '$99.99',
    mainImage: {
      src: './images/black-compass-watch.webp',
      alt: 'Black compass watch',
    },
  },
];

// listing page state
let currentListingId;

// set listing object
let listings;
if (window.location.pathname === '/mens.html') listings = mensListings;
if (window.location.pathname === '/womens.html') listings = womensListings;

// populate shop page
function createListingHTML(listing) {
  return `<div class="listing" value=${listing.id}>
            <div class="listing__img-container">
              <a href="">
                <img
                  class="listing__img"
                  src=${listing.mainImage.src}
                  alt=${listing.mainImage.alt}
                />
              </a>
            </div>

            <div class="listing__content">
              <h2 class="listing__name">
                <a class="listing__link" href="">
                  ${listing.name}
                </a>
              </h2>
              <div class="listing__price">${listing.price}</div>
                <button class="listing__btn">Buy Now</button>
              </div>
            </div>`;
}

const shopListings = document.querySelector('.shop__listings');

listings.forEach((listing) => {
  shopListings.innerHTML += createListingHTML(listing);
});
