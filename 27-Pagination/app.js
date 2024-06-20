import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";
import getElement from "./getElement.js";
import { followersFromData } from "./data.js";

const title = getElement(".section-title h1");
const btnContainer=getElement('.btn-container'); 

let index=0; 
let pages=[]; 

const setupUI=()=>{
    displayFollowers(pages[index]); 
    displayButtons(btnContainer,pages,index)
}


const init = async () => {
//   const followers = await fetchFollowers();
  title.textContent = "pagination";
  pages=paginate(followersFromData); 
  setupUI()
  
};

btnContainer.addEventListener("click",function(e){

 if(e.target.classList.contains('.btn-container'))return; 

 if(e.target.classList.contains('page-btn')){
    index=parseInt(e.target.dataset.index); 
    setupUI(); 
 }

 if(e.target.classList.contains('next-btn')){
    index++; 
    if(index>pages.length-1){
        index=0;  
    }
    setupUI(); 
 }

 if(e.target.classList.contains('prev-btn')){
    index--; 
    if(index<0){
        index=pages.length - 1;  
    }
    setupUI(); 
 }
})

window.addEventListener("load", init);
