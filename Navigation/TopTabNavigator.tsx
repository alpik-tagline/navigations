import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import T1 from "../Componets/T1"
import T2 from "../Componets/T2"
import T3 from "../Componets/T3"


const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="T1" component={T1} />
      <TopTab.Screen name="T2" component={T2} />
      <TopTab.Screen name="T3" component={T3} />
    </TopTab.Navigator >
  )
}

export default TopTabNavigator

const styles = StyleSheet.create({})