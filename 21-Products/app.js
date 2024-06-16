import { getFromStorage,setToStorage} from "./localStroage.js";

const url =
  "https://fakestoreapi.com/products";

  

const productsDOM = document.querySelector(".products-center");

const btnDOM = document.querySelector(".btn");

const fetchProducts = async () => {

  productsDOM.innerHTML=`<div class="loading"></div>`; 
 
  try {

    if(!getFromStorage()){

      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error("There was an Error");
      }
  
      const data = await response.json();
      setToStorage(data);  
      return data; 

    }

    let newData=getFromStorage(); 

    console.log(newData);
    return newData; 

  } catch (error) {
    productsDOM.innerHTML=`<p class="error">There was an error</p>`; 
    console.log(error);
  }
};




const displayProduct=(list)=>{

  let newList=list.map((item)=>{
    const {id,title,price,image,category}=item;

    return `  <a href="product.html?id=${id}" class="single-product">
    <img src="${image}" alt="${title}" class="single-product-img img" />
    <footer>
      <h5 class="name">${title}</h5>
      <span class="price">$${price}</span>
    </footer>
  </a>`
  }).join(" "); 


  productsDOM.innerHTML=`<div class="products-container">${newList}</div>`

}


const start=async()=>{
 
  const data= await fetchProducts(); 
  displayProduct(data)
}


start(); 