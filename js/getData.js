// The Cat API
let count = 15;
let apiUrl = `https://api.thecatapi.com/v1/images/search?limit=${count}`;

// Get Cat Images from Cat API
export default async function getData() {
  loader.hidden = false;
  try {
    const response = await (await fetch(apiUrl)).json();
    return response;
  } catch (error) {
    // Catch Error Here
  }
};
