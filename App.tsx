import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
      <Text>Sachin</Text>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});
