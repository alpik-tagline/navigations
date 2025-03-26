import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const D1 = () => {
  return (
    <View style={styles.container}>
      <Text>D1 Screen</Text>
    </View>
  );
};

export default D1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
