# Pintercats
[![Maintainability](https://api.codeclimate.com/v1/badges/9a45cf7aae882d055a1c/maintainability)](https://codeclimate.com/github/tinawebdev/pintercats/maintainability)
[![ESLint](https://github.com/tinawebdev/pintercats/actions/workflows/eslint.yml/badge.svg?branch=main)](https://github.com/tinawebdev/pintercats/actions/workflows/eslint.yml)

**Cats Viewer app using TheCatApi**
## Features
* Built with Vanilla JS.
* Fething the data in JSON format from the [TheCatApi](https://docs.thecatapi.com/).
* Dynamically inserting the images into the DOM on initial loading.
* When the user scrolls close to the bottom of the page the app makes another GET request to the API and inserts images into the DOM (lazy loading).
* The app stores liked images in LocalStorage.
* Module bundler: [Webpack 5](https://webpack.js.org/)
* Linter: [ESLint](https://eslint.org/) ([eslint-config-google](https://github.com/google/eslint-config-google))

## Live demo
See the live version **[here](https://tinawebdev.github.io/pintercats/)**.

<div style="display: flex; align-items: flex-start;">
  <table><tr><td>
    <img src="./screenshots/demo1.png" height="250" width="250">
    <img src="./screenshots/demo2.png" height="250" width="250">
  </td></tr></table>
</div>

## Requirements
You will need [Node.js](https://nodejs.org/en/) and [Git](https://github.com/git-guides/install-git) installed on your machine.

## Installation
To install, run the following commands into a Terminal window:
```bash
git clone git@github.com:tinawebdev/pintercats.git
cd pintercats
npm install
npm run build-dev
```

## Links
* Fonts: [Google Fonts](https://fonts.google.com/)
* Images: [TheCatApi](https://docs.thecatapi.com/)
