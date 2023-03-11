import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Gradient } from '../screens/Gradient'
import { Home } from '../screens/Home'
import { Square } from '../screens/Square'
import { SquareBehind } from '../screens/SquareBehind'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='home' component={Home} />
            <Screen name='gradient' component={Gradient} />
            <Screen name='square' component={Square} />
            <Screen name='squarebehind' component={SquareBehind} />
        </Navigator>
    )
}