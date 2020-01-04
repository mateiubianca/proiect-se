import React, {useContext} from 'react';
import {ShopStateContext} from "./ShopContext";
import useForm from "./useForm";

function AddMessage() {

    const [, dispatch] = useContext(ShopStateContext);

    const callback = () => {
        dispatch({type : "addMessage", item : input});
        setInput({
            firstName : "",
            lastName : "",
            email : "",
            message : ""
        })
    }

    const {input, setInput, handleInputChanges, handleSubmit} = useForm(callback);

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label >First Name: </label>
                    <input type="text" name={"firstName"} onChange={handleInputChanges} value={input.firstName} required/>
                </div>
                <div>
                    <label >Last Name: </label>
                    <input type="text" name={"lastName"} onChange={handleInputChanges} value={input.lastName} required/>
                </div>
                <div>
                    <label >Email: </label>
                    <input type="email" name={"email"} onChange={handleInputChanges} value={input.email} required/>
                </div>
                <div>
                    <textarea cols="100" rows="10" name={"message"} onChange={handleInputChanges} value={input.message} required/>
                </div>
                <div id ="productsPage">
                    <button type="submit">Submit</button>
                </div>
            </form>

        </div>
    );
}

export default AddMessage;
