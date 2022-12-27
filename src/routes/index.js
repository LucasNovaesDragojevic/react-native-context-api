import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Configuration from '../screens/Configuration'
import Login from '../screens/Login'
import Principal from '../screens/Principal'
import Summary from '../screens/Summary'
import Checkout from '../screens/Checkout'

const Tab = createNativeStackNavigator()

export default function Routes() {
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Tab.Screen name="Principal" component={Principal} options={{ headerShown: false }} />
            <Tab.Screen name="Configurations" component={Configuration} options={{ headerTitleAlign: 'center' }} />
            <Tab.Screen name="Summary" component={Summary} options={{ headerTitleAlign: 'center' }} />
            <Tab.Screen name="Checkout" component={Checkout} options={{ headerTitleAlign: 'center' }} />
        </Tab.Navigator>
    </NavigationContainer>
}