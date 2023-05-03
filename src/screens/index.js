import HomeStack from "./Home/HomeStack"
import CartStack from "./Cart/CartStack"
import ProfileStack from "./Profile/ProfileStack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Home Stack" component={HomeStack} />
            <Tab.Screen name="Cart Stack" component={CartStack} />
            <Tab.Screen name="Profile Stack" component={ProfileStack} />
        </Tab.Navigator>
    );
}

export default BottomTabs

export {
    HomeStack,
    ProfileStack,
    CartStack
}