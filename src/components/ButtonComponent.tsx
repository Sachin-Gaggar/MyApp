import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../utils/Constant';
const ButtonComponent = (props: any) => {
  const {
    title,
    onPress = () => {},
    buttonStyle = styles.buttonView,
    textStyle = styles.text,
  } = props;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
export default ButtonComponent;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  buttonView: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: colors.gold,
  },
  text: {
    color: colors.white,
  },
});
