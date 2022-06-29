import React, {useState, useEffect} from 'react';
import ProductsDisplay from './ProductDisplay'

function Products() {

  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState([])
  const [filterObj, setFilterObj] = useState({ categories: [], 
                                               company: [],
                                               type: [], 
                                               price: []})
  
  useEffect(() => {
    fetch("http://localhost:9000/api/v1/products")
    .then(res => res.json())
    .then(data => {
      setProducts(data.products)
      setFiltered(data.products)
      // console.log('data', data.products)
    })
  }, [])


  function filterRange(property, value) {
    const newObj = {...filterObj}
    if (value.length == 0) {
      newObj[property] = []
    } else {
      newObj[property] = value
    }
    setFilterObj(newObj)
  }
  
  function filterCategorical(e, property, value) {
    const isChecked = e.target.checked
    const newObj = {...filterObj}
    if(isChecked) {
      const arr = newObj[property]
      arr.push(value)
      newObj[property] = arr
      setFilterObj(newObj)
    }
    if(!isChecked) {
      const arr = newObj[property].filter(item => item != value)
      newObj[property] = arr
      setFilterObj(newObj)
    }
  }

  useEffect(() => {
    const keys = Object.keys(filterObj);
    let items = [...products]
    let filteringPresent = false
    keys.forEach(key => {
      if(filterObj[key].length > 0) {
        filteringPresent = true

        if(key == 'price') {
          if (!(filterObj[key].length == 0)) {
            const [min, max] = filterObj[key]
            items = items.filter(product => {
              return product[key] >= min && product[key] < max
            })
          }
        } 
        else if(key == 'categories') {
          items = items.filter(product => {
            return product[key].some(a => {
              return filterObj[key].includes(a)
            })
          })
        }
        else {
          items = items.filter(product => {
            return filterObj[key].includes(product[key])
          })
        }
      } 
    })
    setFiltered(items)
    if(!filteringPresent) setFiltered([...products])
  },[filterObj])

  return (
    <main className="products-main">
      <section className='filter'>
        <div className='filter-domain'>
          <h5>Category</h5>
          <div className='box'>
            <p>Living</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e, 'categories', 'living')}
            />
          </div>
          <div className='box'>
            <p>Kitchen</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e, 'categories', 'kitchen')}
            />
          </div>
          <div className='box'>
            <p>Bedroom</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e, 'categories', 'bedroom')}
            />
          </div>
          <div className='box'>
            <p>Office</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e, 'categories', 'office')}
            />
          </div>
          <div className='box'>
            <p>Garden</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e, 'categories', 'garden')}
            />
          </div>
        </div>
        <div className='filter-domain'>
          <h5>Furnature Type</h5>
          <div className='box'>
            <p>Chair</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e, 'type', 'chair')}
            />
          </div>
          <div className='box'>
            <p>Bed</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e, 'type', 'bed')}
            />
          </div>
          <div className='box'>
            <p>Table</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e, 'type', 'table')}
            />
          </div>
          <div className='box'>
            <p>Other</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e, 'type', 'other')}
            />
          </div>
        </div>
        <div className='filter-domain'>
          <h5>Company</h5>
          <div className='box'>
            <p>EZ Living</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e, 'company', 'ez-living')}
            />
          </div>
          <div className='box'>
            <p>Ikea</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e, 'company', 'ikea')}
            />
          </div>
          <div className='box'>
            <p>Diamond Furniture</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e, 'company', 'diamond-furniture')}
            />
          </div>
          <div className='box'>
            <p>Lucey Furnishings</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e, 'company', 'lucey-furnishings')}
            />
          </div>
        </div>
        <div className='filter-domain'>
          <h5>Price</h5>
          <div>
            <div className='box' id='all-prices'>
            <p>All prices</p>
            <input type="radio" 
                    name="price" 
                    onChange={() => filterRange('price', [])} 
            />
            </div>
            <div className='box'> 
            <p>100 - 400</p>
            <input type="radio" 
                   name="price" 
                   onChange={() => filterRange('price', [100, 400])} 
            />
            </div>
            <div className='box'> 
            <p>400 - 1000</p>
            <input type="radio" 
                   name="price"
                   onChange={() => filterRange('price', [400, 1000])} 
            />
            </div>
            <div className='box'> 
            <p>1000 - 2000</p>
             <input type="radio" 
                   name="price"
                   onChange={() => filterRange('price', [1000, 2000])} 
            /> 
            </div>
            <div className='box'>
            <p>2000+</p>
             <input type="radio" 
                   name="price"
                   onChange={() => filterRange('price', [2000, Infinity])} 
            /> 
            </div>
          </div>
        </div>
      </section>
      <div className="product-container">
        {filtered.map(item => <ProductsDisplay key={item._id} item={item}/>)}
      </div>
    </main>
  )
}

export default Products