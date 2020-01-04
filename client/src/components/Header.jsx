import React from 'react';
import ShoppingCart from "./ShoppingCart";
import logo from '../images/logo2.png';

function Header() {
    return (
        <header>
            <img id="logo" src={logo}  alt="Logo" />
            <ShoppingCart />
        </header>
    );
}

export default Header;
