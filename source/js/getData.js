// The Cat API
let count = 15;
let apiUrl = `https://api.thecatapi.com/v1/images/search?limit=${count}`;

const requestParameters = {
  headers: {
    'x-api-key': '041355a5-6f53-45d5-b984-900a93bf2514',
  },
};

// Get Cat Images from Cat API
export default async function getData() {
  try {
    const response = await (await fetch(apiUrl, requestParameters)).json();
    return response;
  } catch (error) {
    // Catch Error Here
  }
};
