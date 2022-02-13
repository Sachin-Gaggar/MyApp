import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
  NativeTouchEvent,
} from 'react-native';
import {colors} from '../utils/Constant';
type Props = {
  title: string;
  onPress?: Function;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
};
const ButtonComponent = (props: Props) => {
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
    paddingHorizontal: 14,
    borderRadius: 25,
    paddingVertical: 6,
    elevation: 4,
    backgroundColor: colors.darkBlue,
  },
  text: {
    color: colors.white,
  },
});
