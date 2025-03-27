import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Import Stack Navigator
import T1 from './T1';
import T2 from './T2';
import T3 from './T3';
import B1 from './B1';
import B2 from './B2';
import B3 from './B3';

const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); // Create Stack Navigator

function TopTabs() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: 'orange' },
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', color: 'white' },
        tabBarIndicatorStyle: { backgroundColor: 'white' },
      }}
    >
      <TopTab.Screen name="T1" component={T1} />
      <TopTab.Screen name="T2" component={T2} />
      <TopTab.Screen name="T3" component={T3} />
    </TopTab.Navigator>
  );
}

function BottomTabs() {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="B1" component={B1} />
      <BottomTab.Screen name="B2" component={B2} />
      <BottomTab.Screen name="B3" component={B3} />
    </BottomTab.Navigator>
  );
}

const MainScreen = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainContent" component={() => (
        <View style={{ flex: 1 }}>
          <TopTabs />
          <Button title="Back" onPress={() => navigation.goBack()} />
          <Button title="D1" onPress={() => navigation.navigate('D1')} />
          <BottomTabs />
        </View>
      )} />
    </Stack.Navigator>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});