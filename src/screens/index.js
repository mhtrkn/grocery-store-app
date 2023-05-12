import HomeStack from "./Home/HomeStack"
import CartStack from "./Cart/CartStack"
import ProfileStack from "./Profile/ProfileStack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartTabIcon, FavoriteTabIcon, HomeTabIcon, ProfileTabIcon } from "../../assets/icons";
import { View, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

function BottomTabs() {

    const generateColor = (focused) => {
        if (focused) {
            return "#04AC66"
        } else {
            return "#BBB"
        }
    }

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen name="Home" component={HomeStack} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.iconContainer}>
                        {focused && <View style={styles.iconActive} />}
                        <HomeTabIcon width={24} height={24} fill={focused ? "#04AC66" : '#BBB'} />
                    </View>
                ),
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 600,
                    marginTop: 2,
                },
                tabBarActiveTintColor: "#04AC66"
            }} />
            <Tab.Screen name="Favorite" component={CartStack} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.iconContainer}>
                        {focused && <View style={styles.iconActive} />}
                        <FavoriteTabIcon width={26} height={26} stroke={focused && "#04AC66"} />
                    </View>
                ),
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 600,
                    marginTop: 2,
                },
                tabBarActiveTintColor: "#04AC66"
            }} />
            <Tab.Screen name="Profile" component={ProfileStack} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.iconContainer}>
                        {focused && <View style={styles.iconActive} />}
                        <ProfileTabIcon width={28} height={28} fill={focused ? "#04AC66" : '#BBB'} stroke={focused ? "#04AC66" : '#BBB'} />
                    </View>
                ),
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 600,
                    marginTop: 2,
                },
                tabBarActiveTintColor: "#04AC66"
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
        justifyContent: 'flex-end',
        height: '100%',
        position: 'relative'
    },
    iconActive: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 4,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        top: 0,
        backgroundColor: '#04AC66'
    }
})