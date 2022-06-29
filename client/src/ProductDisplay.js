import React from 'react';
import { Link } from 'react-router-dom';
import Product from './routes/Product';
import ProductImage from './ProductImage';


function ProductDisplay(props) {

  return (
    <div className='product-display'>
      <div>
        <Link to={`/products/${props.item._id}`}
            state={{productObj: props.item}}
            element={<Product/>}
            style={{textDecoration:"none"}}
          >
          <h3 className='capitalize'>{props.item.name}</h3>
        </Link>
        <ProductImage item={props.item} />
        <div className='product-display-info'>
          <p><span className='info'>Categories</span>: {props.item.categories.map((cat,index) => {
                            return <span key={`cat${props.item._id + index}`}>{`${cat}  `}</span>
                              })}
          </p> 
          <p><span className='info'>Company</span>: {props.item.company}</p>
          <p><span className='info'>Price</span>: {props.item.price}</p>
          <p><span className='info'>Type:</span> {props.item.type}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay