import { useContext, useState } from 'react'
import { StatusBar, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import { ThemeContext } from '../../contexts/theme'
import { AuthenticationContext } from '../../contexts/authentication'
import { styles } from './styles'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {themeChoosed} = useContext(ThemeContext)
    const {login} = useContext(AuthenticationContext)
    const style = styles(themeChoosed)

    function loginOnSystem() {
        const result = login(email, password)
        if (result === 'ok') {
            navigation.navigate('Principal')
        } else {
            Alert.alert('Impossible to login', result)
        }
    }

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
                    secureTextEntry={true}
                    onChangeText={setPassword} />
            </View>
            <TouchableOpacity
                style={style.btn}
                onPress={loginOnSystem}>
                <Text style={style.btnTexto}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}