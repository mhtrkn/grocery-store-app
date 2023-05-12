import { createStackNavigator } from '@react-navigation/stack';
import Cart from './Cart';
import Payment from "./Payment"
const Stack = createStackNavigator();

function CartStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>
    );
}

export default CartStack

export {
    Cart,
    Payment
}