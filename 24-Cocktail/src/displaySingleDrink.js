import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrink = (drink) => {
  hideLoading();
  const { strDrinkThumb: image, strInstructions: desc, strDrink: name } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
  ].filter((ing) => ing !== null);

  const img = get(".drink-img");
  const drinkName = get(".drink-name");
  const description = get(".drink-desc");
  const ingredients = get(".drink-ingredients");
  img.src = image;
  drinkName.textContent = name;
  description.textContent = desc;
  document.title = name;
  ingredients.innerHTML = list
    .map((ingredient) => {
      return `<li><i class="far fa-check-square"></i>${ingredient}</li>`;
    })
    .join("");
};

export default displayDrink;
