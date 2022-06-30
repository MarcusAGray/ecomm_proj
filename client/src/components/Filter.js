import React, { useState, useEffect } from 'react'


function Filter(props) {
  
  const {products, setDisplayedProducts} = props
  const [filterObj, setFilterObj] = useState({ category: [], company: [], types: [], price: []})


  function filterRange(property, value) {
    const newObj = {...filterObj}
    newObj[property] = value
    setFilterObj(newObj)
  }
  
  function filterCategorical(isChecked, property, value) {
    const newObj = {...filterObj}
    let arr = newObj[property]
  
    if(isChecked) arr.push(value)
    else arr = arr.filter(item => item != value)
  
    newObj[property] = arr
    setFilterObj(newObj)
  }

  useEffect(() => {
    const filterKeys = Object.keys(filterObj);
    const hasNoFilter = filterKeys.every(key => filterObj[key].length == 0)
    
    if (hasNoFilter) {
      setDisplayedProducts([...products])
      return
    }
    
    let items = [...products]
    for (const key of filterKeys) {
      if(filterObj[key].length == 0) continue;

      if(key == 'price') {
        const [min, max] = filterObj[key]
        items = items.filter(item =>  item[key] >= min && item[key] < max)
      } 

      else if(key == 'types') {
        items = items.filter(item => 
          item[key].some(type => filterObj[key].includes(type))
        )
      }

      else items = items.filter(item => filterObj[key].includes(item[key]))
    }
    
    setDisplayedProducts(items)
  },[filterObj])



  return (
    <section className='filter'>
        <div className='filter-domain'>
          <h5>Category</h5>
          <div className='box'>
            <p>Living</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e.target.checked, 'category', 'living')}
            />
          </div>
          <div className='box'>
            <p>Kitchen</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e.target.checked, 'category', 'kitchen')}
            />
          </div>
          <div className='box'>
            <p>Bedroom</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e.target.checked, 'category', 'bedroom')}
            />
          </div>
          <div className='box'>
            <p>Office</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e.target.checked, 'category', 'office')}
            />
          </div>
          <div className='box'>
            <p>Garden</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e.target.checked, 'category', 'garden')}
            />
          </div>
        </div>
        <div className='filter-domain'>
          <h5>Furnature Type</h5>
          <div className='box'>
            <p>Chair</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e.target.checked, 'types', 'chair')}
            />
          </div>
          <div className='box'>
            <p>Bed</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e.target.checked, 'types', 'bed')}
            />
          </div>
          <div className='box'>
            <p>Table</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e.target.checked, 'types', 'table')}
            />
          </div>
          <div className='box'>
            <p>Other</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e.target.checked, 'types', 'other')}
            />
          </div>
        </div>
        <div className='filter-domain'>
          <h5>Company</h5>
          <div className='box'>
            <p>EZ Living</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e.target.checked, 'company', 'ez-living')}
            />
          </div>
          <div className='box'>
            <p>Ikea</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e.target.checked, 'company', 'ikea')}
            />
          </div>
          <div className='box'>
            <p>Diamond Furniture</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e.target.checked, 'company', 'diamond-furniture')}
            />
          </div>
          <div className='box'>
            <p>Lucey Furnishings</p> 
            <input type="checkbox"
                  onChange={e => filterCategorical(e.target.checked, 'company', 'lucey-furnishings')}
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
            <p>€ 100 - 400</p>
            <input type="radio" 
                   name="price" 
                   onChange={() => filterRange('price', [100, 400])} 
            />
            </div>
            <div className='box'> 
            <p>€ 400 - 1000</p>
            <input type="radio" 
                   name="price"
                   onChange={() => filterRange('price', [400, 1000])} 
            />
            </div>
            <div className='box'> 
            <p>€ 1000 - 2000</p>
             <input type="radio" 
                   name="price"
                   onChange={() => filterRange('price', [1000, 2000])} 
            /> 
            </div>
            <div className='box'>
            <p>€ 2000+</p>
             <input type="radio" 
                   name="price"
                   onChange={() => filterRange('price', [2000, Infinity])} 
            /> 
            </div>
          </div>
        </div>
      </section>
  )
}

export default Filter