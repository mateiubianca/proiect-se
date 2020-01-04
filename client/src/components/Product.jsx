import React, {useContext} from 'react';
import {ShopStateContext} from "./ShopContext";

const EURO = "\u20ac";

const Product = ({item}) => {

    const [, dispatch] = useContext(ShopStateContext);

    return (
        <div>
            <section className = "product">
                <img src = {item.image} alt = "product"/>
                <article>
                    <h3>{item.name}</h3>
                    <p>Price: {item.price} {EURO}</p>
                    <p>Colour: {item.colour}</p>
                    <p>Item No: {item.itemNo}</p>
                    <button id = "buy" onClick={() => dispatch({type : "addCartProduct", item : item})}>Add to cart</button>
                </article>
            </section>
        </div>
    );
}

export default Product;