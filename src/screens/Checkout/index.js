import { useContext } from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { ThemeContext } from '../../contexts/theme'

export default function Checkout({navigation}) {

    const {themeChoosed} = useContext(ThemeContext)
    const style = styles(themeChoosed)

    return (
        <View style={style.container}>
            <StatusBar />
            <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('Principal')}>
                <Text style={style.btnText}>Buy</Text>
            </TouchableOpacity>
        </View>
    )
}

