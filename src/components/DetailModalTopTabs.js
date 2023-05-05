import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Recommend from "./Recommend"
import InsideItemDetail from "./InsideItemDetail"

const Tab = createMaterialTopTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Recommend" component={Recommend} />
            <Tab.Screen name="Settings" component={InsideItemDetail} />
        </Tab.Navigator>
    );
}

export default Tabs