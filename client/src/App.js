import React, { useState } from "react";
import {Routes, Route} from "react-router-dom";

import Nav from "./Nav";
import NotFound from "./NotFound";
import Home from './Home'
import About from './About'
import Product from "./routes/Product";
import Checkout from "./Checkout";
import Cart from './Cart'
import Favourites from './Favourites'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} ></Route>
          <Route path="about" element={<About />} />
          <Route path="products/:productID" element={<Product />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Cart />
    </div>
  );
}

export default App;
