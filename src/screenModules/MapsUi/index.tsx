import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import BackButton from '../../components/BackButton';
import {imagePath} from '../../utils/Constant';
const MapsUi = () => {
  return (
    <ImageBackground source={imagePath.gucciBackground} style={{flex: 1}}>
      <View>
        <BackButton></BackButton>
      </View>
    </ImageBackground>
  );
};
export default MapsUi;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});
