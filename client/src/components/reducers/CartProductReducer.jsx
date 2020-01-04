

const CartProductReducer = (cartProducts = [], action) =>{

    switch(action.type){
        case "incrementCount":
        case "addCartProduct":
            const newCartItems = cartProducts;
            const newItem = action.item;
            const index = newCartItems.findIndex(item => item.itemNo === newItem.itemNo);
            console.log(newCartItems)
            if(index !== -1){
                newCartItems[index].quant = newCartItems[index].quant + 1;
            }
            else{
                newItem.quant = 1;
                newCartItems.push(newItem);
            }
            return newCartItems;
        case "decrementCount":
        case "removeCartProduct":
            let newCartItems2 = cartProducts;
            const index2 = newCartItems2.findIndex(item => item.itemNo === action.item.itemNo);
            newCartItems2[index2].quant = newCartItems2[index2].quant - 1;
            if(newCartItems2[index2].quant === 0){
                newCartItems2 = newCartItems2.filter(item => item.itemNo !== action.item.itemNo);
            }
            return newCartItems2
        case "deleteCartProduct":
            const newCartItems3 = cartProducts.filter(item => item !== action.item);
            return newCartItems3;
        default:
            return cartProducts;
    }
}

export default CartProductReducer;