import { getElement } from "./getElement.js";


const img = getElement(".user-img");
const title = getElement(".user-title");
const value = getElement(".user-value");
const btns = getElement(".icon");



export const displayUser = (person) => {
    const { name, image } = person;
    img.src = image;
    title.textContent = "My name is ";
    value.textContent = name;
    btns.map((btn) => {
      btn.classList.remove("active");
    });
    btns[0].classList.add("active");
    btns.map((btn) => {
      btn.addEventListener("click", () => {
        const label = btn.dataset.label;
        title.textContent = `My ${label} is`;
        value.textContent = person[label];
        btns.map((btn) => {
          btn.classList.remove("active");
        });
  
        btn.classList.add("active");
      });
    });
  };