import { createContext, useContext, useState } from 'react'

export const ProductsContext = createContext({})

export default function ProductsProvider({children}) {
    const [quantity, setQuantity] = useState(0)
    const [cart, setCart] = useState([])
    const [lastSeens, setLastSeens] = useState([])

    function seenProduct(product) {
        setQuantity(quantity + 1)
        
        let newCart = cart
        newCart.push(product)
        setCart(newCart)
        
        let newLastSeens = new Set(lastSeens)
        newLastSeens.add(product)
        setLastSeens([...newLastSeens])
    }

    return <ProductsContext.Provider value={{quantity, cart, lastSeens, seenProduct}}>
        {children}
    </ProductsContext.Provider>
}