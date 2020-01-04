import React, {useContext} from 'react';

import Product from "./Product";
import AddProduct from "./AddProduct";
import {ShopStateContext} from "./ShopContext";

const Home = () => {

    const [state, ] = useContext(ShopStateContext);

    console.log(state);

    return (
        <div>
            <div id={"productsPage"}>
                { state.product
                    .map(currItem =>
                        <Product
                            item = {currItem}
                        />)}
            </div>
            <h2>Add a new Product</h2>
            <AddProduct />
        </div>

    );
}

export default Home;
