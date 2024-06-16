const singleProductUrl = "https://fakestoreapi.com/products/";

const getQueryParameter = (name) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};

const productId = getQueryParameter("id");
const productDOM = document.querySelector(".product");

const fetchProduct = async () => {
  productDOM.innerHTML = `<div class="loading"></div>`;

  try {
    const response = await fetch(`${singleProductUrl}${productId}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error("There was an Error");
    }

    return data;
  } catch (error) {
    console.log(error);
    productDOM.innerHTML = `<p class="error">There was an error</p>`;
  }
};

const displayProduct = (data) => {
  const { title, price, description: text, image, category: company } = data;
  document.title=title.slice(0,15).toUpperCase(); ; 

  productDOM.innerHTML = ` <div class="product-wrapper">
         <img src="${image}" alt="img" class="img" />
         <div class="product-info">
           <h3 class="title">${title}</h3>
           <h5 class="company">${company}</h5>
           <span class="price">${price}</span>
           <div class="colors">
             <span class="product-color"></span>
           </div>
           <p>
             ${text}
           </p>
           <button class="btn">add to cart</button>
         </div>
       </div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
