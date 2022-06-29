import React, { useContext } from 'react'
import { Context } from './Context';
import ProductDisplay from './ProductDisplay';

function Favourites() {

  const {favourites} = useContext(Context)

  return (
    <div>
      <h1>Favourites</h1>
      {favourites.map(item => {
        return (
          <ProductDisplay key={`fav${item._id}`} item={item}/>
        )}
      )}
    </div>
  )
}

export default Favourites