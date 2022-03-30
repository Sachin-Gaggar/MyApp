import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import HeaderComponent from '../../components/HeaderComponent';
import InputComponent from './moduleComponents/InputComponent';
import {
  colors,
  deviceHeight,
  GlobalStyles,
  subText,
} from '../../utils/Constant';
import {strings} from '../../utils/String';
import SelectedKeywords from './moduleComponents/SelectedWords';
import {displaySubText} from '../../utils/CommonUtil';
import ActivityIndicatorComponent from '../../components/ActivityIndicator';

const HomeScreen = () => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const keyboardRef = useRef();
  const [keyboardShow, showKeyboard] = useState(false);
  useEffect(() => {
    keyboardShow && keyboardRef?.current.focus();
  }, [keyboardShow]);

  const onAddPress = (text: string) => {
    let words = [...selectedWords];
    if (!words.includes(text)) {
      words.push(text);
      setSelectedWords(words);
    }
  };
  const onDelete = (tobeDeleted: string[]) => {
    setShowLoader(true);
    let selectedArrays = [...selectedWords];
    for (let i = 0; i < tobeDeleted.length; i++) {
      let index = selectedArrays.indexOf(tobeDeleted[i]);
      selectedArrays.splice(index, 1);
    }
    setSelectedWords(selectedArrays);
    setShowLoader(false);
  };
  const onEnterPress = (text: string) => {
    let words = [...selectedWords];
    showKeyboard(false);
    if (!words.includes(text)) {
      words.push(text);
      setSelectedWords(words);
    }
    showKeyboard(true);
  };
  return (
    <>
      <HeaderComponent title={strings.iHave} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.counterContainer}>
          <Text style={[styles.counterText]}>33/800</Text>
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{strings.listAllITems}</Text>
          <Text style={styles.fadedText}>
            Like {displaySubText(subText)} etc.
          </Text>
        </View>
        <InputComponent
          onAddPress={onAddPress}
          onEnterPress={onEnterPress}
          ref={keyboardRef}
        />
        {selectedWords && (
          <SelectedKeywords selectedWords={selectedWords} onDelete={onDelete} />
        )}
      </ScrollView>
      <View style={styles.footer}>
        <View>
          <Text style={{fontSize: 20}}>
            {'\u2022'}
            {'\u2022'}
            {'\u2022'}
            {'\u2022'}
            {'\u2022'}
          </Text>
        </View>
        <View style={styles.record}>
          <Text style={styles.recordHeading}>{strings.harryPotter} </Text>
          <Text style={styles.recordSubHeading}>
            {strings.speakOutKeywords}
          </Text>
        </View>
      </View>
      <ActivityIndicatorComponent showLoader={showLoader} />
    </>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  buttonView: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: colors.gold,
  },
  headingContainer: {paddingHorizontal: 16, marginBottom: 25},
  heading: {
    ...GlobalStyles.medium_15,
    color: colors.darkBlue,
    lineHeight: 17,
    marginBottom: 3,
  },
  counterContainer: {
    width: '100%',
    marginTop: 6,
    paddingRight: 5,
    alignItems: 'flex-end',
  },
  counterText: {
    opacity: 0.5,
    color: colors.mediumGrey,
    lineHeight: 12,
    ...GlobalStyles.medium_10,
  },
  fadedText: {
    opacity: 0.5,
    color: colors.mediumGrey,
    lineHeight: 16,
    ...GlobalStyles.medium_12,
  },
  footer: {
    alignItems: 'center',
    backgroundColor: colors.recordBlue,
    borderColor: colors.whiteSmoke,
    height: 160,
    width: '100%',
    alignSelf: 'stretch',
    borderTopWidth: 1,
  },
  browseComponent: {
    margin: 16,
    alignSelf: 'stretch',
    paddingVertical: 20,
    borderColor: colors.whiteSmoke,
    borderBottomWidth: 1,
  },
  record: {
    flex: 1,
    paddingTop: 30,
  },
  recordHeading: {
    ...GlobalStyles.medium_15,
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  recordSubHeading: {
    ...GlobalStyles.medium_14,
    color: colors.addTextBackground,
  },
});
