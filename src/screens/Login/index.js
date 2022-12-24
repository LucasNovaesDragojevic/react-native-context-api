import { useContext, useState } from 'react'
import { StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ThemeContext } from '../../contexts/theme'
import { styles } from './styles'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {themeChoosed} = useContext(ThemeContext)
    const style = styles(themeChoosed)

    return (
        <View style={style.container}>
            <StatusBar />
            <Text style={style.title}>Login</Text>
            <View style={style.inputArea}>
                <TextInput
                    style={style.input}
                    placeholder='Email'
                    placeholderTextColor='#999'
                    autoCapitalize='none'
                    value={email}
                    onChangeText={setEmail} />
                <TextInput
                    style={style.input}
                    placeholder='Password'
                    placeholderTextColor='#999'
                    autoCapitalize='none'
                    value={password}
                    onChangeText={setPassword} />
            </View>
            <TouchableOpacity
                style={style.btn}
                onPress={() => navigation.navigate('Principal')}>
                <Text style={style.btnTexto}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}