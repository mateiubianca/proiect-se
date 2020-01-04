import React, {useContext, useState} from 'react';
import cart from '../images/cart.png'
import {ShopStateContext} from "./ShopContext";
import CartItemsList from "./CartItemsList";


const ShoppingCart = () => {

    const [state, ] = useContext(ShopStateContext);

    const [hideCart, setHideCart] = useState(true);

    return (
        <div id="cartSect">
            <div id="number">
               {state.count}
            </div>
            <img id="cart" src={cart} alt="" onClick={() => setHideCart(state.cartProducts.length !== 0 ? !hideCart : true)}/>
            {hideCart ? null : <CartItemsList />}
        </div>
    );
}

export default ShoppingCart;
