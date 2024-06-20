//   ATTENTION!!!!!!!!!!!
//   I SWITCHED TO PERMANENT DOMAIN
//   DATA IS THE SAME JUST A DIFFERENT URL,
//   DOES NOT AFFECT PROJECT FUNCTIONALITY

const allProductsUrl = 'https://course-api.com/javascript-store-products'
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  'https://course-api.com/javascript-store-single-product'


const formatPrice = () => {}


export const getElement = (selector) => {
  // Attempt to select multiple elements
  const elements = document.querySelectorAll(selector);

  // If there are multiple elements, return the NodeList
  if (elements.length > 1) {
      return [...elements];
  }

  // If there's exactly one element, return it
  if (elements.length === 1) {
      return elements[0];
  }

  // If no elements are found, throw an error
  const errorMessage = `Element(s) with selector "${selector}" do not exist`;
  console.log(errorMessage);
  throw new Error(errorMessage);
};

const getStorageItem = () => {

}
const setStorageItem = () => {

  
}

export {
  allProductsUrl,
  singleProductUrl,
  formatPrice,
  getStorageItem,
  setStorageItem,
}
