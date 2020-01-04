import React from 'react';
import { Link } from "react-router-dom";
import home from '../images/home.png';
import contact from '../images/contact.png';


function Menu() {
    return (
        <div id="trial">
            <nav>
                <ul>
                    <li><Link to = "./"><img src = {home} alt = "Home" />HOME</Link></li>
                    <li><Link to = "./Contact"><img src = {contact} alt = "Contact" />CONTACT</Link></li>
                </ul>
            </nav>
        </div>

    );
}

export default Menu;
