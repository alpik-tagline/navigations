import { createDrawerNavigator } from '@react-navigation/drawer';
import D1 from '../Componets/D1';
import BottomTabNavigator from "./BottomTabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                swipeEnabled: false,
                gestureEnabled: false,
            }}>
            {/* <Drawer.Screen name="BottomTab" component={BottomTabNavigator} /> */}
            <Drawer.Screen name="BottomTab" component={BottomTabNavigator} options={{ drawerItemStyle: { display: 'none' } }}
            />

            <Drawer.Screen name="D1" component={D1} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
