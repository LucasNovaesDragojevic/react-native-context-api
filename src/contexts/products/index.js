import { createContext, useEffect, useState } from 'react'
import { deleteProduct, getProducts, saveProduct } from '../../services/api/requests/products'

export const ProductsContext = createContext({})

export default function ProductsProvider({children}) {
    const [quantity, setQuantity] = useState(0)
    const [cart, setCart] = useState([])
    const [lastSeens, setLastSeens] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(async () => {
        const result = await getProducts()
        if (result.length > 0) {
            setCart(result)
            setQuantity(result.length)
        }
    }, [])

    async function seenProduct(product) {
        const result = await saveProduct(product)
        
        const newCart = [...cart, result]
        setCart(newCart)
        
        const newLastSeens = new Set(lastSeens)
        newLastSeens.add(product)
        setLastSeens([...newLastSeens])
        
        setQuantity(quantity + 1)

        const newTotalAmount = totalAmount + product.price
        setTotalAmount(newTotalAmount)
    }

    async function checkout() {
        try {
            cart.forEach(async product => {
                await deleteProduct(product)
            })
            setQuantity(0)
            setTotalAmount(0)
            setCart([])
            return 'Checkout success'
        } catch (error) {
            console.error(error)
            return 'Cannot possible checkout'
        }
    }

    return <ProductsContext.Provider value={{quantity, cart, lastSeens, totalAmount, seenProduct, checkout}}>
        {children}
    </ProductsContext.Provider>
}