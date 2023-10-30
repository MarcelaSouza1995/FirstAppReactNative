import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { MyProvider } from '../State/State';
import Details from '../screens/Details/Details';
import Home from '../screens/Home/Home';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </MyProvider>
    </NavigationContainer>
  );
};

export default Navigation;
