import HomeStack from "./Home/HomeStack"
import CartStack from "./Cart/CartStack"
import ProfileStack from "./Profile/ProfileStack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartTabIcon, HomeTabIcon, ProfileTabIcon } from "../../assets/icons";
import { View, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false
        }}>
            <Tab.Screen name="Home Tab" component={HomeStack} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.iconContainer}>
                        {focused && <View style={styles.iconActive} />}
                        <HomeTabIcon width={24} height={24} fill={focused ? "#04AC66" : '#BBB'} />
                    </View>
                )
            }} />
            <Tab.Screen name="Cart Tab" component={CartStack} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.iconContainer}>
                        {focused && <View style={styles.iconActive} />}
                        <CartTabIcon width={30} height={30} stroke={focused ? "#04AC66" : '#BBB'} />
                    </View>
                )
            }} />
            <Tab.Screen name="Profile Tab" component={ProfileStack} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.iconContainer}>
                        {focused && <View style={styles.iconActive} />}
                        <ProfileTabIcon width={28} height={28} fill={focused ? "#04AC66" : '#BBB'} stroke={focused ? "#04AC66" : '#BBB'} />
                    </View>
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

const styles = StyleSheet.create({
    iconContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        position: 'relative'
    },
    iconActive: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 5,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: 'absolute',
        top: 0,
        backgroundColor: '#04AC66'
    }
})