import { getElement } from './utils.js/getElement.js';
const OverlayDOM=getElement('.overlay');
const closeBtn=getElement('.close-btn'); 




class Gallery{
    constructor(element){
        this.imgs = [...element.querySelectorAll(".image-container img")]; 
        console.log(this.imgs);
        
        this.imgs.forEach(img => {

            img.addEventListener('click',()=>{
                console.log("its me");
                OverlayDOM.classList.add('show-overlay'); 
            })

        });

        closeBtn.addEventListener('click',()=>{
            OverlayDOM.classList.remove('show-overlay'); 
            console.log("it close");
        })
    }








}










const gallery = new Gallery(document.querySelector(".gallery-one"));