import {useSelector} from 'react-redux';
import {PublicNavigation} from './PublicNavigation';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigation = () => {
  const isLoggedIn = useSelector(({auth}) => auth.isLoggedIn);
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
