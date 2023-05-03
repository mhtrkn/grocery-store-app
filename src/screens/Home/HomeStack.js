import { createStackNavigator } from '@react-navigation/stack';
import Categories from './Categories';
import Home from "./Home"
import HomeDetail from "./HomeDetail"

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Home Detail" component={HomeDetail} />
            <Stack.Screen name="Categories" component={Categories} />
        </Stack.Navigator>
    );
}

export default HomeStack

export {
    Home,
    HomeDetail
}