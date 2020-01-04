import React from "react";
import CartProductReducer from './CartProductReducer'
import CartCountReducer from './CartCountReducer'
import ProductReducer from './ProductReducer'
import MessageReducer from './MessageReducer'

const reducer = (state, action) => {
    const newState = {
        cartProducts : CartProductReducer(state.cartProducts, action),
        count : CartCountReducer(state.count, action),
        product : ProductReducer(state.product, action),
        messages : MessageReducer(state.messages, action)
    };

    return newState;
}

export default reducer;