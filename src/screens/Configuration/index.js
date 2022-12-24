import { useContext } from 'react'
import { Switch, Text, View } from 'react-native'
import { ThemeContext } from '../../contexts/theme'
import { styles } from './styles'

export default function Configuration({ navigation }) {
    const {actualTheme, setActualTheme, themeChoosed} = useContext(ThemeContext)
    const style = styles(themeChoosed)

    return (
        <View style={style.container}>
            <Text style={style.title}>Configuration</Text>
            <View style={style.inputArea}>
                <Text style={style.subtitle}>Theme: {actualTheme}</Text>
                <Switch
                    onValueChange={changeThemeValue}
                    value={getSwitchValue()} />
            </View>
        </View>
    )

    function changeThemeValue() {
        if (actualTheme === 'dark')
            setActualTheme('light')
        else
            setActualTheme('dark')
    }
    
    function getSwitchValue() {
        if (actualTheme === 'dark')
            return true
        else 
            return false
    }
}
