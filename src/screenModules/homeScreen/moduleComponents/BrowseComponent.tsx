/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ButtonComponent from '../../../components/ButtonComponent';
import {colors, GlobalStyles} from '../../../utils/Constant';
import {strings} from '../../../utils/String';
import Delete from '../../../assets/svg/Delete.svg';
type Props = {
  totalActiveKeywords: number;
  onDeletePress: Function;
};
const BrowseComponent = (props: Props) => {
  const {totalActiveKeywords, onDeletePress} = props;
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <ButtonComponent
          title={strings.browse}
          buttonStyle={styles.button}
          textStyle={styles.browseText}
        />
      </View>
      {Boolean(totalActiveKeywords) && (
        <>
          <View style={{flex: 1}}>
            <Text style={styles.fadedText}>
              {totalActiveKeywords} {strings.selected}
            </Text>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={onDeletePress}>
              <Delete height={14} width={14} />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};
export default BrowseComponent;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    ...GlobalStyles.rowAlignCenter,
    justifyContent: 'space-between',
  },
  button: {
    padding: 2,
    alignSelf: 'flex-start',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    elevation: 2,
  },
  browseText: {
    color: colors.darkBlue,
  },
  fadedText: {
    opacity: 0.5,
    color: colors.mediumGrey,
    textAlign: 'center',
    lineHeight: 19,
    ...GlobalStyles.medium_15,
  },
  deleteButton: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: colors.addTextBackground,
  },
});
