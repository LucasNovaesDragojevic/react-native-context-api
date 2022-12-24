import { useContext } from 'react'
import { FlatList, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Feather } from 'react-native-vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/Feather'
import Product from '../../components/Product'
import { products } from './products'
import { styles } from './styles'
import { ThemeContext } from '../../contexts/theme'

export default function Principal({ navigation }) {
    const lastSeens = []
    const {themeChoosed} = useContext(ThemeContext)
    const style = styles(themeChoosed)
    return (
        <View style={style.container}>
            <StatusBar />
            <View style={style.titleArea}>
                <Text style={style.title}>Hellow, NAME</Text>
                <View style={style.carArea}>
                    <TouchableOpacity onPress={() => { }}>
                        <Feather name="shopping-cart" size={30} color="#fff" style={style.carIcon} />
                    </TouchableOpacity>
                    <View style={style.canQuanityArea}>
                        <Text style={style.carQuantity}>0</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Configurations')} style={style.iconArea} >
                        <MaterialCommunityIcons name="settings" size={30} color="#fff" style={style.icon} />
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={products}
                keyExtractor={item => Math.random()}
                renderItem={({ item }) => <Product item={item} add={true} />}
                style={style.list}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() =>
                    <View>
                        {lastSeens.length > 0 &&
                            <View style={style.lastSeen}>
                                <Text style={style.titleLastSeen}>Last seens</Text>
                                <FlatList
                                    data={lastSeens}
                                    keyExtractor={item => Math.random()}
                                    renderItem={({ item }) => <Product item={item} add={false} />}
                                    style={style.list}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>}
                        <Text style={[style.title, { paddingLeft: 16 }]}>Products</Text>
                    </View>
                }
            />
        </View>
    )
}

