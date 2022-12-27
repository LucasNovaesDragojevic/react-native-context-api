import { useContext } from 'react'
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { ThemeContext } from '../../contexts/theme'
import { ProductsContext } from '../../contexts/products'
import { AuthenticationContext } from '../../contexts/authentication'

export default function Checkout({navigation}) {

    const {quantity, totalAmount, checkout} = useContext(ProductsContext)
    const {user} = useContext(AuthenticationContext)
    const {actualTheme} = useContext(ThemeContext)
    const style = styles(actualTheme)

    async function checkoutPurchase() {
        const result = await checkout()
        Alert.alert(result)
        navigation.navigate('Principal')
    }

    return<View style={style.container}>
            <StatusBar />
            <View style={style.addressArea}>
                <Text style={style.title}>Purchase details</Text>
                <Text style={style.text}>Name: {user.name}</Text>
                <Text style={style.text}>Address: {user.address}</Text>
                <Text style={style.text}>E-mail: {user.email}</Text>
                <Text style={style.text}>Phone: {user.phone}</Text>
            </View>
            <View style={style.checkoutArea}>
                <Text style={style.text}>Quantity: {quantity}</Text>
                <Text style={style.text}>Total amount: $ {totalAmount}</Text>
            </View>
            <TouchableOpacity 
                style={style.btn}
                onPress={() => checkoutPurchase()}>
                <Text style={style.btnText}>Checkout</Text>
            </TouchableOpacity>
        </View>
}

