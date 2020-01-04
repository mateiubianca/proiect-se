// import React from 'react';
// import './App.css';
// import Header from "./components/Header";
// import Menu from "./components/Menu";
// import Home from "./components/Home";
// import Contact from "./components/Contact"
// import {ShopContext, ShopStateProvider} from "./components/ShopContext";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import reducer from "./components/reducers/MainReducer";


// function App() {


//     return (
//         <div>
//           <ShopStateProvider reducer={reducer} initialState={reducer({},{type :'INIT'})}>
//             <Header/>
//             <Router>
//                 <Menu/>
//                 <Switch>
//                     <Route path = "/" component = {Home} exact/>
//                     <Route path = "/Contact" component = {Contact}/>
//                 </Switch>
//             </Router>
//           </ShopStateProvider>

//         </div>
//     );
// }

// export default App;



import React, { useState, useEffect } from "react";

// SERVICES
import productService from './services/productService';

function App() {
  const [products, setproducts] = useState(null);

  useEffect(() => {
    if(!products) {
      getProducts();
    }
  })

  const getProducts = async () => {
    let res = await productService.getAll();
    console.log(res);
    setproducts(res);
  }

  const renderProduct = product => {
    return (
      <li key={product._id} className="list__item product">
        <h3 className="product__name">{product.name}</h3>
        <p className="product__description">{product.description}</p>
        <img src={product.imageURL} />
      </li>
    );
  };

  return (
    <div className="App">
      <ul className="list">
        {(products && products.length > 0) ? (
          products.map(product => renderProduct(product))
        ) : (
          <p>No products found</p>
        )}
      </ul>
    </div>
  );
}

export default App;
