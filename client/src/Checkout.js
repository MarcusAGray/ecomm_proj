import React, { useState, useEffect, useContext } from 'react'
import { Context } from './Context';

function Checkout() {

  const {cartItems, emptyCart} = useContext(Context)

  const [totalPrice, setTotalPrice] = useState(0)
  const [purchaseMessage, setPurchaseMessage] = useState('Purchase Items')

  useEffect(() => {
    let total = cartItems.reduce((a,b) => a + b.price, 0)
    setTotalPrice(total)
  }, [cartItems])


  function purchase() {
    cartItems.forEach(item => {
      const newQuantity = item.quantity - 1
      fetch(`http://localhost:9000/api/v1/products/${item._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          "quantity": newQuantity
        })
      })
    })
  }

  async function placeOrder() {
    if(cartItems.length == 0) {
      alert("No items in cart to purchase")
      return
    }
    setPurchaseMessage('Placing Order...')
    await purchase()
    setTimeout(() => {
      emptyCart()
      setPurchaseMessage('Order Placed')
    }, 3000)
  }

  return (
    <div className='checkout page-content-container'>
      <h1>Checkout</h1>
      <div>
        {cartItems.map(item => 
          <div key={`checkout${item._id}`} className='checkout-item'>
            <div className='checkout-img-container'>
              <img src={item.image} className="checkout-item-img" />
            </div>
            <div className='checkout-item-info'>
              <h3 className='capitalize'>{item.name}</h3>
              <p>Price: {item.price}</p>
              <p>Description: {item.description}</p>
            </div>
          </div>
        )}
        </div>
        <div>
          <div className='checkout-end-container'>
            <p id="total">Total: €{totalPrice}</p>
            <button onClick={placeOrder}>{purchaseMessage}</button>
          </div>
        </div>
    </div>
  )
}

export default Checkout