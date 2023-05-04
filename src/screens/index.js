import HomeStack from "./Home/HomeStack"
import CartStack from "./Cart/CartStack"
import ProfileStack from "./Profile/ProfileStack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartTabIcon, HomeTabIcon, ProfileTabIcon } from "../../assets/icons";

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false
        }}>
            <Tab.Screen name="Home Tab" component={HomeStack} options={{
                tabBarIcon: ({ }) => (
                    <HomeTabIcon width={24} height={24} />
                )
            }} />
            <Tab.Screen name="Cart Tab" component={CartStack} options={{
                tabBarIcon: ({ }) => (
                    <CartTabIcon width={30} height={30} />
                )
            }} />
            <Tab.Screen name="Profile Tab" component={ProfileStack} options={{
                tabBarIcon: ({ }) => (
                    <ProfileTabIcon width={28} height={28}/>
                )
            }} />
        </Tab.Navigator>
    );
}

export default BottomTabs

export {
    HomeStack,
    ProfileStack,
    CartStack
}