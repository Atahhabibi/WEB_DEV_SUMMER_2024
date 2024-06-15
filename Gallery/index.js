import { getElement } from "./utils.js/getElement.js";
const OverlayDOM = getElement(".overlay");
const closeBtn = getElement(".close-btn");
const mainImgDOM = getElement(".main-img");
const miniGalleryDOM = getElement(".mini-img-container");
const nameDOM = getElement(".name");
const SlideShowDOM = getElement(".slide-show");

class Gallery {
  constructor(element) {
    this.imgs = [...element.querySelectorAll(".image-container img")];

    this.mainIndex = 0;

    this.imgs.forEach((img) => {
      img.addEventListener("click", (e) => {
        this.mainImgSrc = e.target.src;
        mainImgDOM.src = this.mainImgSrc;

        this.imgs.map((item, index) => {
          if (this.mainImgSrc === item.src) {
            this.mainIndex = index;
          }
        });

        // Remove the part before "images/"
        let modifiedUrl = this.mainImgSrc.replace(/^.*images\//, "");
        // Remove the file extension
        let result = modifiedUrl.split(".")[0];

        nameDOM.innerHTML = result;

        OverlayDOM.classList.add("show-overlay");

        this.parentElement = e.target.parentElement;
        this.miniImgs = [...this.parentElement.children];

        miniGalleryDOM.innerHTML = this.miniImgs
          .map((img, index) => {
            if (this.mainImgSrc === img.src) {
              return ` <img src="${img.src}" alt="cat-2" class="img active" />`;
            }

            return ` <img src="${img.src}" alt="cat-2" class="img" />`;
          })
          .join("");
      });
    });

    this.count = this.mainIndex;

    SlideShowDOM.addEventListener("click", (e) => {
      this.BtnDOM = e.target.parentElement;
      this.arrowImgs = [
        ...this.BtnDOM.parentElement.nextElementSibling.nextElementSibling
          .firstElementChild.children
      ];

      if (this.BtnDOM.classList.contains("right-arrow")) {
        this.count++;

        if (this.count > this.arrowImgs.length - 1) {
          this.count = 0;
        }

        this.mainIndex = this.count;

        this.mainImgSrc = this.arrowImgs[this.count].src;

        miniGalleryDOM.innerHTML = this.arrowImgs
          .map((img, index) => {
            if (index === this.mainIndex) {
              return ` <img src="${img.src}" alt="cat-2" class="img active" />`;
            } else {
              return ` <img src="${img.src}" alt="cat-2" class="img" />`;
            }
          })
          .join("");

        this.newMiniChildren = [...miniGalleryDOM.children];

        // Remove the part before "images/"
        let modifiedUrl = this.newMiniChildren[this.count].src.replace(
          /^.*images\//,
          ""
        );
        // Remove the file extension
        let result = modifiedUrl.split(".")[0];

        nameDOM.innerHTML = result;

        mainImgDOM.src = this.mainImgSrc;
      }
      if (this.BtnDOM.classList.contains("left-arrow")) {
        console.log("left");

        this.count--;

        if (this.count < 0) {
          this.count = this.arrowImgs.length - 1;
        }

        this.mainIndex = this.count;

        miniGalleryDOM.innerHTML = this.arrowImgs
          .map((img, index) => {
            if (index === this.mainIndex) {
              return ` <img src="${img.src}" alt="cat-2" class="img active" />`;
            } else {
              return ` <img src="${img.src}" alt="cat-2" class="img" />`;
            }
          })
          .join("");

        this.newMiniChildren = [...miniGalleryDOM.children];

        // Remove the part before "images/"
        let modifiedUrl = this.newMiniChildren[this.count].src.replace(
          /^.*images\//,
          ""
        );
        // Remove the file extension
        let result = modifiedUrl.split(".")[0];

        nameDOM.innerHTML = result;

        this.mainImgSrc = this.arrowImgs[this.count].src;

        mainImgDOM.src = this.mainImgSrc;
      }
    });

    miniGalleryDOM.addEventListener("click", (e) => {
      this.miniImgsFor = [...e.target.parentElement.children];

      this.miniImgsFor.map((item, index) => {
        if (item.src === e.target.src) {
          this.count = index;
        }
      });

      console.log(this.count);

      this.miniIMGsrc = e.target.src;

      this.miniImgsFor.map((img, index) => {
        if (img.classList.contains("active")) {
          img.classList.remove("active");
        }

        e.target.classList.add("active");
      });

      mainImgDOM.src = this.miniIMGsrc;
    });

    closeBtn.addEventListener("click", () => {
      OverlayDOM.classList.remove("show-overlay");
      console.log("it close");
    });
  }
}

const gallery1 = new Gallery(document.querySelector(".gallery-one"));
const gallery2 = new Gallery(document.querySelector(".gallery-two"));
