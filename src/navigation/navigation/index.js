import React from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {PublicNavigation} from './PublicNavigation';
import {PrivateNavigation} from './PrivateNavigation';

const Stack = createStackNavigator();

export const Navigation = () => {
  const {isLoggedIn} = useSelector(({auth}) => auth);

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Screen
          name="App"
          component={PrivateNavigation}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="Auth"
          component={PublicNavigation}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};
