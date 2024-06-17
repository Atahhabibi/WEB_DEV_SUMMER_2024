import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = ({ drinks }) => {
  const section = get(".section-center");
  const title = get(".title");

  if (!drinks) {
    hideLoading(); 
    title.textContent = "Sorry, no drinks matched your search";
    section.innerHTML = null;
    return;
  }

  const newDrinks = drinks
    .map((drink) => {
      const { strDrinkThumb: img, idDrink: id, strDrink: name } = drink;

      return `<a href="./drink.html?id=${id}">
        <article class="cocktail" data-id="${id}">
          <img src="${img}" alt="cocktail" />
          <h3>${name}</h3>
        </article>
      </a>
`;
    })
    .join(" ");

  //hide-loading

  hideLoading(); 

  title.textContent = "";
  section.innerHTML = newDrinks;

  return section;
};

export default displayDrinks;
