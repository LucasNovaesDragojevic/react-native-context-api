import Routes from './src/routes'
import ThemeProvider from './src/contexts/theme'
import { AuthenticationProvider } from './src/contexts/authentication'
import ProductsProvider from './src/contexts/products'

export default function App() {
    return <ThemeProvider>
        <AuthenticationProvider>
            <ProductsProvider>
                <Routes />
            </ProductsProvider>
        </AuthenticationProvider>
    </ThemeProvider>
}