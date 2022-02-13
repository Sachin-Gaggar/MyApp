import React, {Ref, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';
import AddPlus from '../../../assets/svg/Add plus.svg';
// @ts-ignore
import {colors, GlobalStyles, imagePath} from '../../../utils/Constant';
import {strings} from '../../../utils/String';
type Props = {
  onAddPress: Function;
};
const InputComponent = (props: Props, ref: any) => {
  const {onAddPress, onEnterPress} = props;
  const [textValue, setTextValue] = useState<string | null>();
  const onChangeText = (text: string) => {
    setTextValue(text);
  };
  const refocus = async () => {
    let text = textValue;
    await setTextValue('');
    onEnterPress(text);
  };
  const onPress = () => {
    onAddPress(textValue);
    setTextValue('');
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
            // @ts-ignore
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
          ref={ref}
          // @ts-ignore
          value={textValue}
          keyboardType={'default'}
          onChangeText={onChangeText}
          onSubmitEditing={() => {
            refocus();
          }}
          placeholderTextColor={colors.placeHolder}
        />
      </View>
      {iconDisplay()}
    </View>
  );
};
export default React.forwardRef(InputComponent);
const styles = StyleSheet.create({
  //@ts-ignore
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
    padding: 2,
    backgroundColor: colors.addTextBackground,
  },
  micIcon: {
    width: 20,
    height: 20,
  },
});
