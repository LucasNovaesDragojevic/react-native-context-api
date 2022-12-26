import { useContext } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { ProductsContext } from '../../contexts/products'
import { styles } from './styles'

export default function Product({ item, add }) {
    const {seenProduct} = useContext(ProductsContext)
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={item.image} />
            <View style={styles.textContainer}>
                <Text style={styles.text} numberOfLines={1}>{item.text}</Text>
                <Text style={styles.price}>R$ {item.price}</Text>
            </View>
            {add &&
                <TouchableOpacity style={styles.btnAdd} onPress={() => seenProduct(item)}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>}
        </View>
    )
}
