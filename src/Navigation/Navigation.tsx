import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { MyProvider } from '../State/State';
import Details from '../screens/Details/Details';
import Favoritos from '../screens/Favoritos/Favoritos';
import Home from '../screens/Home/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyProvider>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="HomeTab"
            component={HomeStack}
            options={{
              tabBarLabel: 'HomeTab',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Favoritos"
            component={Favoritos}
            options={{
              tabBarLabel: 'Favoritos',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="heart"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          {/* Adicione mais abas/tab screens conforme necessário */}
        </Tab.Navigator>
      </MyProvider>
    </NavigationContainer>
  );
};

export default Navigation;
