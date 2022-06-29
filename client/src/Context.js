import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    
    const [cartItems, setCartItems] = useState([])
    const [isCartDisplayed, setIsCartDisplayed] = useState(false)
    const [favourites, setFavourites] = useState([])

    const addToCart = (newItem) => {
      console.log("newItem", newItem)
      if(cartItems.some(item => item._id == newItem._id)) {
        return
      }
      setCartItems(prevItems => [...prevItems, newItem])
    }

    function emptyCart() {
      setCartItems([])
    }

    function removeFromCart(id) {
      setCartItems(prevItems => prevItems.filter(item => item._id !== id))
    }

    function toggleFavourite(item) {
      const arr = [...favourites]
      const isInFavs = arr.some(product => product._id == item._id)
      isInFavs ? setFavourites(prevItems => prevItems.filter(product => product._id !== item._id)) :
                 setFavourites(prevItems => [...prevItems, item])
    } 
    
    return (
        <Context.Provider value={{
            favourites,
            toggleFavourite, 
            isCartDisplayed,
            setIsCartDisplayed,
            cartItems, 
            addToCart, 
            removeFromCart, 
            emptyCart
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}