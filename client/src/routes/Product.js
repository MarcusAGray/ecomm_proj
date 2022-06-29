import React, { useState, useContext } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../Context';
import ProductImage from '../ProductImage';

function Product(props) {

  const {addToCart} = useContext(Context)

  let params = useParams();
  let id = params.productID
  const item = useLocation().state.productObj;
  const {name, price, quantity, image, description, company} = item
  let navigate = useNavigate(); 

  item._id = id

  function buy() {
    addToCart(item)
    navigate("/checkout");
  }

  return (
    <div className='product-page-container'>
      
      <div className='product-img-container'>
        <ProductImage item={item} />
      </div>
      <div className='product-info-container'>
        <h3 className='capitalize'>{name}</h3>
        <p>Price: {price}</p>
        <p>{description}</p>
        <p>Company: {company}</p>
      </div>
      {(quantity > 0) ? <p>Quantity Remaining: {quantity}</p>: <p>Out of stock</p>}
      {(quantity > 0) && <button className='product-btn' onClick={() => addToCart(item)}>Add to Cart</button>}
      {(quantity > 0) && <button className='product-btn' onClick={buy}>Buy</button>}
      <Link to="/">Go to the home page</Link>
    </div>
  )
}

export default Product