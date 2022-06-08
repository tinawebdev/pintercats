const imagesContainer = document.querySelector('#images-container');
let favoritesList = [];

// To define 'like' button class
const isFavorite = (img) => !favoritesList[img] ? 'like-btn' : 'like-btn liked';

// Image container
const item = (img) => {
  return `
    <div class="image-container">
      <img src="${img}" alt="Cat Image" class="image">
      <a class="${isFavorite(img)}"></a>
    </div>
  `;
};

// Render results
const renderResults = (results) => {
  results.forEach((img) => {
    imagesContainer.insertAdjacentHTML('beforeend', item(img.url));
  });
};

// Render favorites
const renderFavorites = () => {
  Object.values(favoritesList).forEach((img) => {
    imagesContainer.insertAdjacentHTML('beforeend', item(img));
  });
};

// Results or favorites
const renderImgContainer = ({favorites, currentPage, resultsArray}) => {
  favoritesList = favorites;
  if (currentPage === 'favorites') {
    clearContent();
    renderFavorites();
  } else {
    renderResults(resultsArray);
  }
};

// Clear page
const clearContent = () => imagesContainer.textContent = '';

export {renderImgContainer, clearContent};
