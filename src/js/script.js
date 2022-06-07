import {renderImgContainer} from './renderContent.js';
import renderNavigation from './renderNavigation.js';
import getData from './getData.js';
import {showLoadingSpinner, removeLoadingSpinner} from './loader.js';
import '../scss/style.scss';

const state = {
  resultsArray: [],
  favorites: localStorage.getItem('catsFavorites') ?
    JSON.parse(localStorage.getItem('catsFavorites')) :
    {},
  currentPage: 'results',
  imagesLoaded: 0,
  totalImages: 0,
  readyToFetch: false,
};

// Check to see if scrolling near bottom of page, load more cat images
window.addEventListener('scroll', loadMoreImages);
async function loadMoreImages() {
  // eslint-disable-next-line max-len
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && state.readyToFetch) {
    state.readyToFetch = false;
    displayImages('results');
  }
}

// Create elements for imagess, add to DOM
async function displayImages(page) {
  if (page === 'results') {
    renderNavigation(state.currentPage);
    setCurrentPage();
    showLoadingSpinner(); /* Show Loader */
    state.resultsArray = await getData();
    state.imagesLoaded = 0;
    state.totalImages = state.resultsArray.length;
    renderImgContainer(page, state.resultsArray);
  }

  if (page === 'favorites') {
    removeLoadingSpinner(); /* Remove Loader */
    renderNavigation(state.currentPage);
    setCurrentPage();
    renderImgContainer(page, state.favorites);
  }
  prepareImages();
}

// Add or remove from favorites
function prepareImages() {
  checkImageLoaded();
  const images = document.querySelectorAll('.like-btn');
  images.forEach((img) => {
    if (!img.getAttribute('listener')) {
      img.setAttribute('listener', 'true');
      img.addEventListener('click', (event) => {
        const likeBtn = event.target;
        const itemURL = likeBtn.previousElementSibling.currentSrc;
        likeBtn.classList.toggle('liked');
        !state.favorites[itemURL] ?
          saveFavorite(itemURL) :
          removeFavorite(itemURL);
      });
    }
  });
}

// Check if all images were loaded
function checkImageLoaded() {
  const images = document.querySelectorAll('.image');
  images.forEach((img) => img.addEventListener('load', imageLoaded));
  function imageLoaded() {
    state.imagesLoaded++;
    if (state.imagesLoaded === state.totalImages) {
      state.readyToFetch = true;
      removeLoadingSpinner(); /* Remove Loader */
    }
  }
}

// Add image to favorites
function saveFavorite(itemURL) {
  state.favorites[itemURL] = itemURL;
  localStorage.setItem('catsFavorites', JSON.stringify(state.favorites));
}

// Remove images from favorites
function removeFavorite(itemURL) {
  delete state.favorites[itemURL];
  localStorage.setItem('catsFavorites', JSON.stringify(state.favorites));
  state.currentPage === 'favorites' ? displayImages(state.currentPage) : false;
}

// Set current page on click
function setCurrentPage() {
  const favoritesLink = document.getElementById('favorites');
  const resultsLink = document.getElementById('results');

  favoritesLink.addEventListener('click', showPage('favorites'));
  resultsLink.addEventListener('click', showPage('results'));
}

// Show results or favorites container
const showPage = (page) => () => {
  page === 'favorites' ?
    window.removeEventListener('scroll', loadMoreImages) :
    window.addEventListener('scroll', loadMoreImages);
  state.currentPage = page;
  displayImages(state.currentPage);
};

displayImages('results');
