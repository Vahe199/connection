import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {setAuthentication} from '../redux/actions/auth';

export const Login = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.root}>
      <View>
        <Text
          onPress={() => {
            dispatch(setAuthentication(true));
          }}>
          Login
        </Text>
        <Button
          title={'qwqwqw'}
          onPress={() => {
            dispatch(setAuthentication(true));
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
