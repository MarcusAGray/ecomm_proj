import React, { useState, useContext } from 'react'
import { Context } from './Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function ProductImage(props) {

  const {favourites, toggleFavourite} = useContext(Context)
  
  const [isHovered, setIsHovered] = useState(false)

  function checkFavs() {
    return favourites.some(favs => favs._id == item._id)
  }

  const {item} = props

  return (
    <div className='img-container'
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="product-img-small" src={item.image}/>
      {isHovered && <button className='fav' onClick={() => toggleFavourite(item)}>{checkFavs() ? <FontAwesomeIcon className="favourited heart-icon" icon={faHeart} /> : <FontAwesomeIcon className="unfavourited heart-icon" icon={faHeart} />}</button>}
    </div>

  )
}

export default ProductImage