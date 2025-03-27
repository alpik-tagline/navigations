import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import B1 from '../Componets/B1';
import TopTabNavigator from "../Navigation/TopTabNavigator"
import B2 from '../Componets/B2';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator  screenOptions={{ headerShown: false }}>
            <BottomTab.Screen name="B1" component={B1} />
            <BottomTab.Screen name="B2"  component={B2} />
            <BottomTab.Screen name="B3" component={TopTabNavigator}/>
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})