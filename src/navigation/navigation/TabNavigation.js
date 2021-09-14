import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" />
  </Stack.Navigator>
);

export const TabNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen name="HomeStack" component={HomeStack} />
  </Tab.Navigator>
);
