import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import T1 from './T1';
import T2 from './T2';
import T3 from './T3';

const Tab = createMaterialTopTabNavigator();

function B3() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: 'orange' },
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', color: 'white' },
                tabBarIndicatorStyle: { backgroundColor: 'white' },
            }}
        >
            <Tab.Screen name="T1" component={T1} />
            <Tab.Screen name="T2" component={T2} />
            <Tab.Screen name="T3" component={T3} />
        </Tab.Navigator>
    );
}

export default B3; 