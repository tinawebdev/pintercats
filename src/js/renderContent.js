const imagesContainer = document.querySelector('#images-container');
let favorites = [];

// To define 'like' button class
const isFavorite = (img) => !favorites[img] ? 'like-btn' : 'like-btn liked';

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
  Object.values(favorites).forEach((img) => {
    imagesContainer.insertAdjacentHTML('beforeend', item(img));
  });
};

// Results or favorites
const renderImgContainer = (page, data) => {
  favorites = data.favorites;
  if (page === 'favorites') {
    clearContent();
    renderFavorites();
  } else {
    renderResults(data.resultsArray);
  }
};

// Clear page
const clearContent = () => imagesContainer.textContent = '';

export {renderImgContainer, clearContent};
