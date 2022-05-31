const loader = document.getElementById('img-loader');

const loaderContent = `
  <img src="source/img/loader/cat.gif" alt="Loading">
  <p>... loading more cats ...</p>
`

function showLoadingSpinner() {
  loader.insertAdjacentHTML("beforeend", loaderContent);
  loader.classList.remove('hide');
}

function removeLoadingSpinner() {
  loader.textContent = "";
  loader.classList.add('hide');
}

export { showLoadingSpinner, removeLoadingSpinner };
