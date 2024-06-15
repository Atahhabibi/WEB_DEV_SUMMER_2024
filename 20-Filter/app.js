import { products } from "./products.js";
let filterProducts = [...products];
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");
const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
  if (filterProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry,No products match your search</h6>`;
    return;
  }

  productsContainer.innerHTML = filterProducts
    .map((product) => {
      const { title, price, image, id } = product;

      return `<article class="product" data-id="${id}">
        <img
          src="${image}"
          alt=""
          class="product-img img"
        />
    
        <footer>
          <h5 class="product-name">${title}</h5>
          <span class="product-price">${price}</span>
        </footer>
      </article>`;
    })
    .join("");
};

displayProducts();

form.addEventListener("keyup", () => {
  const inputValue = searchInput.value;
  filterProducts = products.filter((products) => {
    return products.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

const companies = document.querySelector(".companies");

const displayButtons = () => {
  const buttons = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];
  companies.innerHTML = buttons
    .map((company) => {
      return ` <button class="company-btn" data-id="${company}">${company}</button>`;
    })
    .join("");
};

displayButtons();

companies.addEventListener("click", (e) => {
  const el = e.target;

  if (el.classList.contains("company-btn")) {
    if (el.dataset.id === "all") {
      filterProducts = [...products];
    } else {
      filterProducts = products.filter(
        (product) => product.company === el.dataset.id
      );
    }

    searchInput.value = "";
    displayProducts();
  }
});
