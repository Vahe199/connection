import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './navigation';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};
