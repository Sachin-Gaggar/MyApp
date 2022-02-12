import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import AddPlus from '../../../assets/svg/Add plus.svg';
import Mic from '../../../assets/svg/mic.svg';
import {colors, GlobalStyles, imagePath} from '../../../utils/Constant';
import {strings} from '../../../utils/String';
type Props = {
  onAddPress: Function;
};
const InputComponent = (props: Props) => {
  const {onAddPress} = props;
  const [textValue, setTextValue] = useState<string | null>();
  const onChangeText = (text: string) => {
    setTextValue(text);
  };
  const onPress = () => {
    onAddPress(textValue);
    setTextValue();
  };
  const iconDisplay = () => {
    if (textValue) {
      return (
        <TouchableOpacity onPress={onPress} style={styles.addIcon}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AddPlus width={10} height={10} />
            <Text style={styles.addText}> {strings.add}</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={styles.recordIcon}>
          <Image
            style={styles.micIcon}
            source={imagePath.mic}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      );
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TextInput
          placeholder={strings.addKeyword}
          style={styles.text}
          value={textValue}
          onChangeText={onChangeText}
          placeholderTextColor={colors.placeHolder}
        />
      </View>
      {iconDisplay()}
    </View>
  );
};
export default InputComponent;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    ...GlobalStyles.rowAlignCenter,
    ...GlobalStyles.rowJustifyCenter,
  },
  textContainer: {
    width: '50%',
    borderColor: colors.whiteSmoke,
    borderBottomWidth: 1,
    alignSelf: 'center',
  },
  text: {
    ...GlobalStyles.medium_14,
    padding: 0,
    color: colors.darkBlue,
  },
  addText: {
    ...GlobalStyles.medium_14,
    color: colors.darkBlue,
  },
  addIcon: {
    alignSelf: 'center',
    padding: 2,
    borderRadius: 10,
    backgroundColor: colors.addTextBackground,
  },
  recordIcon: {
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 4,
    backgroundColor: colors.addTextBackground,
  },
  micIcon: {
    width: 15,
    height: 15,
  },
});
