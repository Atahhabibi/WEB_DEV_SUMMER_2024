import { getStorageItem, setStorageItem } from './utils.js';

let store = [];

const setupStore = (products) => {
    store=products.map((product)=>{
        const {id,fields}=product; 
        const {company,colors,featured,price,name,image}=fields; 
        const {thumbnails:{large:{url:img}}}=image[0]; 
        return {id,company,colors,featured,price,name,img}; 
    }) ; 

    setStorageItem(store); 
};



const findProduct = () => {

};

export { store, setupStore, findProduct };
