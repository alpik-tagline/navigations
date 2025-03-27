import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './Navigation/DrawerNavigator';
import Home from './Componets/Home';

const App = () => {
  return (
    <NavigationContainer>
      <Home />
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
