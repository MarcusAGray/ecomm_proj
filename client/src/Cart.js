import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'


function Cart(props) {

  const {cartItems, 
        isCartDisplayed, 
        setIsCartDisplayed,
        emptyCart,
        removeFromCart} = useContext(Context)
 
  let navigate = useNavigate(); 
  

  const {item} = props


  const pathName = window.location.pathname//setState for this?
  


  function toCheckout() {
    navigate("/checkout");
  }

  return (
    <div className='cart' style={isCartDisplayed ? {display : 'block'} : {display : 'none'}}>
      <div className='cart-heading'>
        <h1>Cart</h1>
        <div>
          <button id='cart-close-btn' onClick={() => setIsCartDisplayed(false)}><FontAwesomeIcon icon={faX} className='x-icon'/></button>

          {/* {pathName != '/checkout' && <button onClick={toCheckout}>Go to Checkout</button>} */}
        </div>
      </div>
      <div className='cart-item-container' style={{msOverflowY: 'scroll', height: '380px'}}>
        {cartItems.map(item => {
          return (
            <div key={`Cart${item._id}`} className='cart-item'>
              <p className='capitalize'>{item.name}</p>
              <p >Price: {item.price}</p>
              <div className='cart-img-container'>
                <img className='cart-img' src={item.image}/>
              </div>
              <button onClick={() => removeFromCart(item._id)}>Remove Item</button>
            </div>
          )}
        )}
      </div>
      <div className='cart-btn-container'>
          <button onClick={emptyCart}>Empty Cart</button>
          <div>
            {pathName != '/checkout' && <button onClick={toCheckout}>Go to Checkout</button>}
          </div>
          {/* <button id='cart-close-btn' onClick={() => setIsCartDisplayed(false)}><FontAwesomeIcon icon={faX}/></button> */}
      </div>


    </div>
  )
}

export default Cart