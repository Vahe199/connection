import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const Home = () => {
  return (
    <View style={styles.root}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
