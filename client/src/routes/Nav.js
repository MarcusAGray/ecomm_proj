import React, { useContext } from 'react'
import { Outlet, Link } from "react-router-dom";
import { Context } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function Nav() {
  
  const {isCartDisplayed, setIsCartDisplayed} = useContext(Context)


  return (
    <div>
      <div>
        <header>
          <Link to="/" className="heading"><h1 >Ecommerce Site</h1></Link>
        </header>
        <nav>
          <ul className='nav-one'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <div className='nav-two'>
            <Link to="/favourites" className='nav-fav-link'>Favourites</Link>
            <button className='cart-btn' onClick={() => setIsCartDisplayed(!isCartDisplayed)}><FontAwesomeIcon className='cart-icon' icon={faCartShopping} /></button>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default Nav