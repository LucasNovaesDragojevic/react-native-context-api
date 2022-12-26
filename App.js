import Routes from './src/routes'
import ThemeProvider from './src/contexts/theme'
import { AuthenticationProvider } from './src/contexts/authentication'

export default function App() {
    return <ThemeProvider>
        <AuthenticationProvider>
            <Routes />
        </AuthenticationProvider>
    </ThemeProvider>
}