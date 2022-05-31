# Pintercats
[![Maintainability](https://api.codeclimate.com/v1/badges/9a45cf7aae882d055a1c/maintainability)](https://codeclimate.com/github/tinawebdev/pintercats/maintainability)

**Cats Viewer app using TheCatApi**

* Fething the data in JSON format from the [TheCatApi](https://docs.thecatapi.com/).
* Dynamically inserting the images into the DOM on initial loading.
* When the user scrolls close to the bottom of the page the app makes another GET request to the API and inserts images into the DOM (lazy loading).
* The app stores liked images in LocalStorage.

## Demo
You can view a live version [here](https://tinawebdev.github.io/pintercats/).

<div style="display: flex; align-items: flex-start;">
  <img src="./screenshots/demo1.png" height="400">
  <img src="./screenshots/demo2.png" height="400">
</div>

## To use the code
* Download the repository.
```
git clone git@github.com:tinawebdev/pintercats.git
```

* Go to the `pintercats` folder and open the `index.html` file.
```
cd pintercats
```

## Tools
* Fonts: [Google Fonts](https://fonts.google.com/)
* Images: [TheCatApi](https://docs.thecatapi.com/)
