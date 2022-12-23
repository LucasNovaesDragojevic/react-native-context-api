import { useState } from 'react'
import { Text, View, Switch } from 'react-native'
import { styles } from './styles'

export default function Configuration({ navigation }) {
    const [state, setState] = useState(true);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Configuration</Text>
            <View style={styles.inputArea}>
                <Text style={styles.subtitle}>Theme: Low light</Text>
                <Switch
                    onValueChange={() => setState(!state)}
                    value={state} />
            </View>
        </View>
    )
}

