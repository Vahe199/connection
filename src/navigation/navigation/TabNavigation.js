import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../../screens';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export const TabNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomeStack"
      component={HomeStack}
      options={{headerShown: false}}
    />
  </Tab.Navigator>
);
