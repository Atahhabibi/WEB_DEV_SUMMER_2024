import { showLoading, hideLoading } from "./toggleLoading.js";

const fetchDrinks = async (url) => {
  showLoading();

  try {
    const response = await fetch(url);
    const data = await response.json();
    hideLoading();
    return data;
  } catch (error) {
    hideLoading();
    console.log(error);
  }
};

export default fetchDrinks;
