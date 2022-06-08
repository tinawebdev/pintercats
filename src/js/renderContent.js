const imagesContainer = document.querySelector('#images-container');
let favorites = [];

const isFavorite = (img) => !favorites[img] ? 'like-btn' : 'like-btn liked';

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
const renderFavorites = (favorites) => {
  Object.values(favorites).forEach((img) => {
    imagesContainer.insertAdjacentHTML('beforeend', item(img));
  });
};

// Results or favorites
const renderImgContainer = (page, data) => {
  favorites = data.favorites;
  page === 'results' ?
    renderResults(data.resultsArray) :
    renderFavorites(favorites);
};

// Clear page
const clearContent = () => imagesContainer.textContent = '';

export {renderImgContainer, clearContent};
