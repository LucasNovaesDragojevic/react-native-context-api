import Routes from './src/routes'
import InfoProvider from './src/contexts/global'

export default function App() {
    return <InfoProvider>
        <Routes />
    </InfoProvider>
}