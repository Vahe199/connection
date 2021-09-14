import React from 'react';
import {AppNavigator} from './src/navigation/AppNavigator';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <AppNavigator />
    </StoreProvider>
  );
};

export default App;
