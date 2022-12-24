import { createContext, useState } from 'react'
import { dark, light } from '../../styles'

export const ThemeContext = createContext({})

export default function ThemeProvider({children}) {
    const [actualTheme, setActualTheme] = useState('dark')

    const themes = {
        'dark': dark,
        'light': light        
    }

    return <ThemeContext.Provider value={{
        actualTheme,
        setActualTheme,
        themeChoosed: themes[actualTheme]
    }}>
        {children}
    </ThemeContext.Provider>
}