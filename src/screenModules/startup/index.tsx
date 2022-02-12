import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {colors, screenNames} from '../../utils/Constant';

const Startup = (props: any) => {
  const [showLoader, setLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
      props.navigation.replace(screenNames.homeScreen);
      console.log('Hello');
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <View style={styles.container}>
      <Text style={styles.h1Text}>My App</Text>
      {showLoader && (
        <ActivityIndicator color={colors.orangeYellowCrayola} size={'large'} />
      )}
    </View>
  );
};
export default Startup;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.spanishBlue,
  },
  h1Text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
