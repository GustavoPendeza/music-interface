import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Circle } from '../screens/Circle'
import { Gradient } from '../screens/Gradient'
import { Home } from '../screens/Home'
import { Square } from '../screens/Square'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='home' component={Home} />
            <Screen name='gradient' component={Gradient} />
            <Screen name='square' component={Square} />
            <Screen name='circle' component={Circle} />
        </Navigator>
    )
}