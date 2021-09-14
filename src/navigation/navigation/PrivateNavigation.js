import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TabNavigation} from './TabNavigation';

const Stack = createStackNavigator();

export const PrivateNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTab"
        component={TabNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
