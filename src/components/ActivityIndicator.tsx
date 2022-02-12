import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {colors, deviceHeight} from '../utils/Constant';
const ActivityIndicatorComponent = ({showLoader}: {showLoader: boolean}) => {
  if (showLoader) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={colors.darkBlue} size={'large'} />
      </View>
    );
  } else {
    return null;
  }
};
export default ActivityIndicatorComponent;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: deviceHeight,
    justifyContent: 'center',
  },
});
