import displayDrink from "./src/displaySingleDrink.js";
import fetchDrinks from "./src/fetchDrinks.js";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const presentDrink = async () => {
  const id = localStorage.getItem("drink");

  if (!id) {
    window.location.replace("index.html");
  } else {
    const drink = await fetchDrinks(`${URL}${id}`);
    displayDrink(drink.drinks[0]);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  presentDrink();
});
