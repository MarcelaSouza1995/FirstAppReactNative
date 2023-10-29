import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';

import { MyProvider } from '../State/State';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </MyProvider>
    </NavigationContainer>
  );
};

export default Navigation;
