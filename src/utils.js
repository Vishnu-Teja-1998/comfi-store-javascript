const allProductsUrl =
  'https://course-api.netlify.app/api/javascript-store-products?id=rec43w3ipXvP28vog';
// temporary single product
// 'https://course-api.netlify.app/api/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  'https://course-api.netlify.app/api/javascript-store-single-product?id=rec43w3ipXvP28vog';

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const formatPrice = () => {};

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item)
  if (item) {
    storageItem = JSON.parse(localStorage.getItem(item))
  } else {
    storageItem = []
  }
  return storageItem
};
const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item))
};

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
};