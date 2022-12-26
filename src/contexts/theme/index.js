import { createContext, useEffect, useState } from 'react'
import { dark, light } from '../../styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const ThemeContext = createContext({})

export default function ThemeProvider({children}) {
    const [actualTheme, setActualTheme] = useState('dark')

    const themes = {
        'dark': dark,
        'light': light        
    }

    useEffect(async () => {
        const themeSaved = await AsyncStorage.getItem('theme')
        if (themeSaved)
            setActualTheme(themeSaved)
    }, [])

    async function saveThemeLocally(theme) {
        await AsyncStorage.setItem('theme', theme)
        setActualTheme(theme)
    }

    return <ThemeContext.Provider value={{
        actualTheme,
        setActualTheme,
        themeChoosed: themes[actualTheme],
        saveThemeLocally
    }}>
        {children}
    </ThemeContext.Provider>
}