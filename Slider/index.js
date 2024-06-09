console.log("Js working");
import { getElement } from "./utils.js/getElement.js";
import { images } from "./data.js";

const btnContainer = getElement(".btn-container");

const sliderDOM = getElement(".slider");

let newImages = images
  .map((img) => {
    return `<div class="img-container">
    <h1>${img.id}</h1>
    <img src="${img.img}" alt="" class="img" />
  </div>`;
  })
  .join("");

sliderDOM.innerHTML = newImages;
const imgContainer = getElement(".img-container");

let count = 1;
console.log(imgContainer);

btnContainer.addEventListener("click", (e) => {
  const BtnDOM = e.target;

  if (BtnDOM.classList.contains("next")) {
    if (count >= images.length - 1) {
      count = -1;
    }

    count++;

    imgContainer.map((img) => {
      img.style.transform = `translateX(-${count}00%)`;
    });

  }

  if (BtnDOM.classList.contains("prev")) {
    count--;
    if (count < 0) {
        count =images.length-1;
      }
    imgContainer.map((img) => {
      img.style.transform = `translateX(-${count}00%)`;
    });
  }

});
