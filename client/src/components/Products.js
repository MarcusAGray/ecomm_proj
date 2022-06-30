import React, {useState, useEffect} from 'react';
import ProductsDisplay from './ProductDisplay'
import Filter from './Filter'

function Products() {

  const [products, setProducts] = useState([])
  const [displayedProducts, setDisplayedProducts] = useState([])
  
  
  useEffect(() => {
    fetch("http://localhost:9000/api/v1/products")
    .then(res => res.json())
    .then(data => {
      setProducts(data.products)
      setDisplayedProducts(data.products)
      // console.log('data', data.products)
    })
  }, [])


  return (
    <main className="products-main">
      <Filter products={products} setDisplayedProducts={setDisplayedProducts}/>
      <div className="product-container">
        {displayedProducts.map(item => <ProductsDisplay key={item._id} item={item}/>)}
      </div>
    </main>
  )
}

export default Products