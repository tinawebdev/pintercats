const navContainer = document.querySelector('.nav-container');

export default (currentPage) => {
  const isActive = (page) => (page === currentPage) ? 'is-active' : '';
  navContainer.innerHTML = `
    <ul class="nav-items">
      <li class="nav-link ${isActive('results')}" id="results">All cats</li>
      <li class="nav-link ${isActive('favorites')}" id="favorites">Favorite cats</li>
    </ul>
  `;
};
