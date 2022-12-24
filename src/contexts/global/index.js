import { createContext } from 'react'

export const ContextGlobal = createContext({})

export default function InfoProvider({children}) {
    const number = 150

    return <ContextGlobal.Provider value={{
        number
    }}>
        {children}
    </ContextGlobal.Provider>
}