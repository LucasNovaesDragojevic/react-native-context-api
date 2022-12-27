import { createContext, useEffect, useState } from 'react'
import { dark, light } from '../../styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const ThemeContext = createContext({})

export default function ThemeProvider({children}) {
    const [theme, setTheme] = useState('dark')

    const themes = {
        'dark': dark,
        'light': light        
    }

    useEffect(async () => {
        const themeActual = await AsyncStorage.getItem('theme')
        if (themeActual)
            setTheme(themeActual)
    }, [])

    async function changeTheme(theme) {
        await AsyncStorage.setItem('theme', theme)
        setTheme(theme)
    }

    return <ThemeContext.Provider value={{
        theme,
        actualTheme: themes[theme],
        changeTheme
    }}>
        {children}
    </ThemeContext.Provider>
}