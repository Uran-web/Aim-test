export const DATA_URL = 'http://localhost:3000/productset.json';

// eslint-disable-next-line consistent-return
export const getProducts = async () => {
  try {
    const response = await fetch(DATA_URL);

    return response.json();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error', error);
  }
};
