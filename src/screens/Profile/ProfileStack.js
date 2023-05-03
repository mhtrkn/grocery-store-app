import { createStackNavigator } from '@react-navigation/stack';
import Profile from "./Profile"
import ProfileDetail from "./ProfileDetail"
const Stack = createStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Profile Detail" component={ProfileDetail} />
        </Stack.Navigator>
    );
}

export default ProfileStack

export {
    Profile,
    ProfileDetail
}