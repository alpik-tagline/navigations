import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import D1 from './D1'
import T3 from './T3' 

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="D1" component={D1} />
            <Drawer.Screen name="T3" component={T3} /> 
        </Drawer.Navigator>
    )
}

export default MyDrawer;
