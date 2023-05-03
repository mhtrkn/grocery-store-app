import { createStackNavigator } from '@react-navigation/stack';
import Cart from './Cart';
import CartDetail from "./CartDetail"
const Stack = createStackNavigator();

function CartStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Cart Detail" component={CartDetail} />
        </Stack.Navigator>
    );
}

export default CartStack

export {
    Cart,
    CartDetail
}