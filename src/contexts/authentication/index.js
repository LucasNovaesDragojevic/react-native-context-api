import { createContext, useState } from "react";

export const AuthenticationContext = createContext({})

export function AuthenticationProvider({children}) {
    const [user, setUser] = useState(null)

    async function login(email, password) {
        if (email == 'user@email.com' && password == 123) {
            setUser({
                name: 'User name',
                email: email,
                address: 'Wall Street',
                phone: '0123456789'
            })
            return 'ok'
        } else {
            return 'E-mail or passwords incorrects'
        }
    }
    
    return <AuthenticationContext.Provider value={{user, login}}>
        {children}
    </AuthenticationContext.Provider>
}