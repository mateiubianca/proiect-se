import React, {createContext, useReducer} from 'react'
import data from '../data/data.json';
import reducer from './reducers/MainReducer'

const initialState = {products:data, shoppingCartCount:0, cartItems:[], messages:[]};

export const ShopStateContext =  createContext({});

export const ShopStateProvider = (props)=>{

    return(
        <ShopStateContext.Provider value={useReducer(props.reducer, props.initialState)}>
            {props.children}
        </ShopStateContext.Provider>
    );
};