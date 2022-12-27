import { useContext } from 'react'
import { Switch, Text, View } from 'react-native'
import { ThemeContext } from '../../contexts/theme'
import { styles } from './styles'

export default function Configuration({}) {
    const {theme, actualTheme, changeTheme} = useContext(ThemeContext)
    const style = styles(actualTheme)

    return (
        <View style={style.container}>
            <Text style={style.title}>Configuration</Text>
            <View style={style.inputArea}>
                <Text style={style.subtitle}>Theme: {theme}</Text>
                <Switch
                    onValueChange={changeThemeValue}
                    value={getSwitchValue()} />
            </View>
        </View>
    )

    function changeThemeValue() {
        if (theme === 'dark')
            changeTheme('light')
        else
            changeTheme('dark')
    }
    
    function getSwitchValue() {
        if (theme === 'dark')
            return true
        else 
            return false
    }
}
