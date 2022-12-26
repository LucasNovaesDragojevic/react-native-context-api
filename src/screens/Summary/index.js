import { useContext } from 'react'
import { FlatList, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Feather } from 'react-native-vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/Feather'
import Product from '../../components/Product'
import { styles } from './styles'
import { ThemeContext } from '../../contexts/theme'
import { AuthenticationContext } from '../../contexts/authentication'
import { ProductsContext } from '../../contexts/products'

export default function Summary({navigation}) {

    const {themeChoosed} = useContext(ThemeContext)
    const {user} = useContext(AuthenticationContext)
    const {quantity, cart} = useContext(ProductsContext)
    const style = styles(themeChoosed)

    return (
        <View style={style.container}>
            <StatusBar />
            <View style={style.titleArea}>
                <Text style={style.title}>Hellow, {user.name}</Text>
                <View style={style.carArea}>
                    <TouchableOpacity onPress={() => { }}>
                        <Feather name="shopping-cart" size={30} color="#fff" style={style.carIcon} />
                    </TouchableOpacity>
                    { quantity > 0 && <View style={style.canQuanityArea}>
                        <Text style={style.carQuantity}>{quantity}</Text>
                    </View>}
                    <TouchableOpacity onPress={() => navigation.navigate('Configurations')} style={style.iconArea} >
                        <MaterialCommunityIcons name="settings" size={30} color="#fff" style={style.icon} />
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={cart}
                keyExtractor={item => Math.random()}
                renderItem={({ item }) => <Product item={item} add={false} />}
                style={style.list}
                showsVerticalScrollIndicator={false}/>

            <TouchableOpacity style={style.btn} onPress={navigation.navigate('Checkout')}>
                <Text style={style.btnText}>Buy</Text>
            </TouchableOpacity>
        </View>
    )
}

