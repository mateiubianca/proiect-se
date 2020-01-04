import data from '../../data/data.json';

const ProductReducer = (product = data, action) =>{
    switch(action.type){
        case "addProduct" :
            const newProductList = product;
            newProductList.push(action.item)
            return newProductList;
        default:
            return product;
    }
}

export default ProductReducer;