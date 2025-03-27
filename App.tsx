import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Componets/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import B1 from './Componets/B1'
import B2 from './Componets/B2'
import B3 from './Componets/B3'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import D1 from './Componets/D1'

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator()

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="B1" component={B1} />
      <Tab.Screen name="B2" component={B2} />
      <Tab.Screen name="B3" component={B3} />
    </Tab.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='ASD' component={D1} />
      </Drawer.Navigator>
      <Home />
      <MyTabs />
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({});