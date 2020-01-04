const CartCountReducer = (count = 0, action) =>{
    switch(action.type){
        case "addCartProduct":
        case "incrementCount":
            return count + 1;
        case "decrementCount":
            return count - 1;
        case "deleteCartProduct":
        case "decrementCountValue":
            return count - action.value;
        default:
            return count;
    }
}

export default CartCountReducer;