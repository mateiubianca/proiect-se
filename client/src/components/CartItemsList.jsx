import React, {useContext} from 'react';
import {ShopStateContext} from "./ShopContext";


const CartItemsList = () => {

    const [state, dispatch] = useContext(ShopStateContext);

    return (
        <div>
            <ul className = "cartItem">
                <li><div><p>Shopping Cart Contents:</p></div></li>
                {
                    state.cartProducts.map((item) =>
                        <li className="cartRow">
                            <div><button id = "deleteItem" onClick={() => dispatch({type : "deleteCartProduct", item : item, value : item.quant})}>x</button></div>
                            <img src = {item.image} alt = "product" className="cartColumn"/>
                            <div className="cartColumn">
                                <div>
                                    <p>{item.name}</p>
                                </div>
                                <div className="changeQuant">
                                    <button onClick={() => dispatch({type : "decrementCount", item : item})}>
                                        -
                                    </button>
                                    Buc: {item.quant}
                                    <button onClick={() => dispatch({type : "incrementCount", item : item})}>
                                        +
                                    </button>
                                </div>
                            </div>
                        </li>
                    )
                }
                <li id="productsPage"><button >CheckOut</button></li>
            </ul>
        </div>
    );
}

export default CartItemsList;
