console.log("Js working");
import {getElement} from './utils.js/getElement.js'

const btnContainer=getElement('.btn-container');
let count 


btnContainer.addEventListener("click",(e)=>{

    const BtnDOM=e.target; 

    if(BtnDOM.classList.contains('next')){
        console.log("its next");

    }
    if(BtnDOM.classList.contains('prev')){
        console.log("its prev");
    }

})