import {renderImgContainer, clearContent} from './renderContent.js';
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
    renderData('results');
  }
}

async function renderData(page) {
  prepareNavLinks();
  await displayImages(page);
  checkImageLoaded();
  prepareLikeBtns();
}

// Create elements for imagess, add to DOM
async function displayImages(page) {
  if (page === 'results') {
    showLoadingSpinner(); /* Show Loader */
    state.resultsArray = await getData();
    state.imagesLoaded = 0;
    state.totalImages = state.resultsArray.length;
  }
  renderImgContainer(state);
}

// Add or remove from favorites
function prepareLikeBtns() {
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
  if (itemURL) {
    state.favorites[itemURL] = itemURL;
    localStorage.setItem('catsFavorites', JSON.stringify(state.favorites));
  }
}

// Remove images from favorites
function removeFavorite(itemURL) {
  delete state.favorites[itemURL];
  localStorage.setItem('catsFavorites', JSON.stringify(state.favorites));
  state.currentPage === 'favorites' ? renderData(state.currentPage) : false;
}

// Add listeners to nav links
function prepareNavLinks() {
  const favoritesLink = document.getElementById('favorites');
  const resultsLink = document.getElementById('results');
  // Show on click
  favoritesLink.addEventListener('click', showPage('favorites'));
  resultsLink.addEventListener('click', showPage('results'));
}

// Show results or favorites container
const showPage = (page) => () => {
  state.currentPage = page;
  state.currentPage === 'favorites' ?
    window.removeEventListener('scroll', loadMoreImages) :
    window.addEventListener('scroll', loadMoreImages);
  removeLoadingSpinner();
  clearContent();
  renderNavigation(state.currentPage);
  renderData(state.currentPage);
};

renderData(state.currentPage);
