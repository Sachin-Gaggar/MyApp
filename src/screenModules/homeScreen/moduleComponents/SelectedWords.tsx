import React from 'react';
import {View, StyleSheet} from 'react-native';
import ButtonComponent from '../../../components/ButtonComponent';
import {colors, GlobalStyles} from '../../../utils/Constant';

const SelectedKeywords = ({selectedWords}: {selectedWords: string[]}) => {
  return (
    <View style={styles.container}>
      {selectedWords?.map((item: string, index: number) => {
        return (
          <ButtonComponent
            title={item}
            key={index}
            textStyle={styles.addText}
            buttonStyle={styles.button}
          />
        );
      })}
    </View>
  );
};
export default SelectedKeywords;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    ...GlobalStyles.flexCenter,
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    flex: 1,
  },
  button: {
    padding: 4,
    borderRadius: 5,
    backgroundColor: colors.selectedWords,
    borderColor: colors.selectedBorder,
    borderWidth: 1,
    margin: 5,
  },
  addText: {
    ...GlobalStyles.medium_14,
    color: colors.darkBlue,
  },
});
