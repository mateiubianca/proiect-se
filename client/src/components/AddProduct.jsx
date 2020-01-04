import React, {useContext} from 'react';
import useForm from './useForm'
import {ShopStateContext} from "./ShopContext";


const AddProduct = () => {

    const [, dispatch] = useContext(ShopStateContext);

    const callback = () => {
        dispatch({type : "addProduct", item : input})
        setInput({
            name : "",
            price : "",
            colour : "",
            itemNo : "",
            image : ""
        })
    }

    const {input, setInput, handleInputChanges, handleSubmit} = useForm(callback);

    return (
        <form id={"newProductForm"} onSubmit={handleSubmit}>
            <div>
                <div className="formElement">
                    <label>Name </label>
                    <input type={"text"} name={"name"} onChange={handleInputChanges} value={input.name} required />
                </div>

                <div class="formElement">
                    <label>Price </label>
                    <input type={"number"} name={"price"} onChange={handleInputChanges} value={input.price} required/>
                </div>

                <div className="formElement">
                    <label>Colour </label>
                    <input type={"text"} name={"colour"} onChange={handleInputChanges} value={input.colour} required/>
                </div>

                <div class="formElement">
                    <label>Item Number </label>
                    <input type={"text"} name={"itemNo"} onChange={handleInputChanges} value={input.itemNo} required/>
                </div>

                <div class="formElement">
                    <label>Image </label>
                    <input type={"text"} name={"image"} onChange={handleInputChanges} value={input.image} required/>
                </div>

            </div>
            <div id ="productsPage"><button type={"Submit"}>Add Product</button></div>
        </form>
    );
}

export default AddProduct;