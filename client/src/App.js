import React from "react";
import {Routes, Route} from "react-router-dom";

import Nav from "./routes/Nav";
import NotFound from "./routes/NotFound";
import Home from './routes/Home';
import About from './routes/About';
import Product from "./routes/Product";
import Checkout from "./routes/Checkout";
import Favourites from './routes/Favourites';
import Cart from './Cart'

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
