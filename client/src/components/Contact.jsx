import React, {useContext} from 'react';
import AddMessage from "./AddMessage";
import {ShopStateContext} from "./ShopContext";
import Message from "./Message";

function Contact() {

    const [state, ] = useContext(ShopStateContext);

    return (
        <div  id = "contactForm">
            <AddMessage />
            {
                state.messages.map((mess) =>  <Message item={mess}/>)
            }

        </div>
    );
}

export default Contact;
