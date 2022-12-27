import api from '../..'

export async function saveProduct(product) {
    try {
        const result = await api.post('products', product)
        return result.data
    } catch (error) {
        console.error(error)
        return {}
    }
}

export async function getProducts() {
    try {
        const result = await api.get('products')
        return result.data
    } catch (error) {
        console.error(error)
        return []
    }
}

export async function deleteProduct(product) {
    try {
        await api.delete(`products/${product.id}`)
    } catch (error) {
        console.error(error)
        throw error
    }
}