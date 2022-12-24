import { useContext, useState } from 'react'
import { FlatList, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Feather } from 'react-native-vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/Feather'
import Product from '../../components/Product'
import { ContextGlobal } from '../../contexts/global'
import { products } from './products'
import { styles } from './styles'

export default function Principal({ navigation }) {
    const lastSeens = []
    const {value} = useContext(ContextGlobal)
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.titleArea}>
                <Text style={styles.title}>Hellow, NAME</Text>
                <View style={styles.carArea}>
                    <TouchableOpacity onPress={() => { }}>
                        <Feather name="shopping-cart" size={30} color="#fff" style={styles.carIcon} />
                    </TouchableOpacity>
                    <View style={styles.canQuanityArea}>
                        <Text style={styles.carQuantity}>0</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Configurations')} style={styles.iconArea} >
                        <MaterialCommunityIcons name="settings" size={30} color="#fff" style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={products}
                keyExtractor={item => Math.random()}
                renderItem={({ item }) => <Product item={item} add={true} />}
                style={styles.list}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() =>
                    <View>
                        {lastSeens.length > 0 &&
                            <View style={styles.lastSeen}>
                                <Text style={styles.titleLastSeen}>Last seens</Text>
                                <FlatList
                                    data={lastSeens}
                                    keyExtractor={item => Math.random()}
                                    renderItem={({ item }) => <Product item={item} add={false} />}
                                    style={styles.list}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>}
                        <Text style={[styles.title, { paddingLeft: 16 }]}>Products</Text>
                    </View>
                }
            />
        </View>
    )
}

