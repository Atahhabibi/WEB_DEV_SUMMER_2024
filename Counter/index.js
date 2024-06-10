import { getElement } from "./utils.js/getElement.js";

class Counter {
  constructor(value, element) {
    this.value = value;
    this.element = element;
    this.resetBtn = element.querySelector(".Reset");
    this.increaseBtn = element.querySelector(".Increase");
    this.decreaseBtn = element.querySelector(".Decrease");
    this.valueDOM = element.querySelector(".count");
    // this.increase= this.increase.bind(this); 
    // this.decrease=this.decrease.bind(this); 
    // this.reset=this.reset.bind(this); 

    this.resetBtn.addEventListener('click',this.reset.bind(this)); 
    this.decreaseBtn.addEventListener('click',this.decrease.bind(this)); 
    this.increaseBtn.addEventListener('click',this.increase.bind(this)); 
  }

  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}


const firstCounter=new Counter(100,getElement('.first-counter')); 
const seondCounter=new Counter(200,getElement('.second-counter')); 


