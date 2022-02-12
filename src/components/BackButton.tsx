import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  NativeModules,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import IosHeaderBack from '../assets/svg/iosHeaderBack.svg';
import {colors} from '../utils/Constant';
import useStatusBarHeight from '../utils/statusBarHeight';
const {StatusBarManager} = NativeModules;

const BackButton = (props: any) => {
  const navigate = useNavigation();
  const {onPress = onBackPress} = props;
  function onBackPress() {
    navigate.goBack();
  }
  let val = useStatusBarHeight();
  console.log(val);

  return (
    <View
      style={[
        styles.buttonView,
        {
          top: val,
        },
      ]}>
      <TouchableOpacity style={{width: '100%'}} onPress={onPress}>
        <IosHeaderBack height={18} width={18} />
      </TouchableOpacity>
    </View>
  );
};
export default BackButton;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  buttonView: {
    backgroundColor: colors.white,
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 10,
    opacity: 0.2,
  },
});
