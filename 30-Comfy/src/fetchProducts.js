import { products } from "../data.js";

const fetchProducts = async () => {
  try {
    const response = await fetch(
      "https://www.course-api.com/javascript-store-products"
    );
    if (response) {
      const data = await response.json();
      return data;
    }
    return response; 
    
  } catch (error) {
    console.log(error);
  }
};

export default fetchProducts;
