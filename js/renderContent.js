const resultsContainer = document.querySelector('#results-container');
const favoritesContainer = document.querySelector('#favorites-container');

// Show or hide container
const toggleContainers = (containerToShow, containerToHide) => {
  containerToShow.classList.remove('hide');
  containerToHide.classList.add('hide')
}

// Render results container
const renderResults = (results) => {
  results.forEach((img) => {
    const item = `
      <div class="image-container">
        <img src="${img.url}" alt="Cat Image" class="image">
        <a class="like-btn"></a>
      </div>
    `
    resultsContainer.insertAdjacentHTML("beforeend", item);
  });
};

// Render favorites container
const renderFavorites = (favorites) => {
  favoritesContainer.textContent = "";
  Object.values(favorites).forEach((img) => {
    const item = `
      <div class="image-container">
        <img src="${img}" alt="Cat Image" class="image">
        <a class="like-btn liked"></a>
      </div>
    `
    favoritesContainer.insertAdjacentHTML("beforeend", item);
  });
};

// Results or favorites
const renderImgContainer = (page, data) => {
  if (page === 'results') {
    toggleContainers(resultsContainer, favoritesContainer);
    renderResults(data);
  } 
  if (page === 'favorites') {
    toggleContainers(favoritesContainer, resultsContainer);
    renderFavorites(data);
  }
}

export { renderImgContainer };
