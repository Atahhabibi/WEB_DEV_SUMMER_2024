import { getElement } from "./utils.js/getElement.js";
import { getUser } from "./utils.js/fetchUser.js";
import { displayUser } from "./utils.js/displayUser.js";
const btn = getElement(".btn");




const showUser = async () => {
  const person = await getUser();
  displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);


