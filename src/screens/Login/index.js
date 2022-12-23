import { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import { styles } from './styles'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <StatusBar />
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor='#999'
                    autoCapitalize='none'
                    value={email}
                    onChangeText={setEmail} />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='#999'
                    autoCapitalize='none'
                    value={password}
                    onChangeText={setPassword} />
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Principal')}>
                <Text style={styles.btnTexto}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}