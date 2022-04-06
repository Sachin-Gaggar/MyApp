import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AutomaticAnimation from './src/screenModules/AutomaticAnimation';
import ManualAnimation from './src/screenModules/ManualAnimation';

const App = props => {
  const [automaticAnimation, setAutomaticAnimation] = useState(true);
  const onPress = () => {
    setAutomaticAnimation(!automaticAnimation);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>
          {automaticAnimation ? 'Manual Animation' : 'Automatic Animation'}
        </Text>
      </TouchableOpacity>
      {automaticAnimation ? <AutomaticAnimation /> : <ManualAnimation />}
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 8,
    marginVertical: 20,
  },
});
