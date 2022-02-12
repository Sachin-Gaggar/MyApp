import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ButtonComponent from '../../../components/ButtonComponent';
import {colors, GlobalStyles} from '../../../utils/Constant';
import {strings} from '../../../utils/String';
const BrowseComponent = props => {
  return (
    <View style={styles.container}>
      <ButtonComponent
        title={strings.browse}
        buttonStyle={styles.button}
        textStyle={styles.browseText}
      />
    </View>
  );
};
export default BrowseComponent;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    ...GlobalStyles.rowAlignCenter,
  },
  button: {
    padding: 4,
    borderRadius: 2,
    backgroundColor: colors.white,
    elevation: 2,
  },
  browseText: {
    color: colors.darkBlue,
  },
});
