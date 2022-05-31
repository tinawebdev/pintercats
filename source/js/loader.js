const loader = document.getElementById('img-loader');

const loaderContent = `
  <img src="img/loader/cat.gif" alt="Loading">
  <p>... loading more cats ...</p>
`
loader.insertAdjacentHTML("beforeend", loaderContent);

function showLoadingSpinner() {
  loader.classList.remove('hide');
}

function removeLoadingSpinner() {
  loader.classList.add('hide');
}

export { showLoadingSpinner, removeLoadingSpinner };
