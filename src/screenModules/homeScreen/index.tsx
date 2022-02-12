import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import BrowseComponent from './moduleComponents/BrowseComponent';
import ButtonComponent from '../../components/ButtonComponent';
import HeaderComponent from '../../components/HeaderComponent';
import InputComponent from './moduleComponents/InputComponent';
import {colors, deviceWidth, GlobalStyles, subText} from '../../utils/Constant';
import {strings} from '../../utils/String';
import SelectedKeywords from './moduleComponents/SelectedWords';

const HomeScreen = () => {
  const [selectedWords, setSelectedWords] = useState<string[]>();
  const displaySubText = () => {
    return subText.map((item: string, index: number) => {
      if (index < subText.length - 1) {
        return `${item}, `;
      } else {
        return item;
      }
    });
  };
  const onAddPress = (text: string) => {
    let words = selectedWords?.length > 0 ? [...selectedWords] : [];
    words.push(text);
    setSelectedWords(words);
  };
  return (
    <>
      <HeaderComponent title={strings.iHave} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.counterContainer}>
          <Text style={styles.fadedText}>33/800</Text>
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{strings.listAllITems}</Text>
          <Text style={styles.fadedText}>like {displaySubText()} etc.</Text>
        </View>
        <InputComponent onAddPress={onAddPress} />
        <View style={styles.browseComponent}>
          <BrowseComponent />
        </View>
        <SelectedKeywords selectedWords={selectedWords} />
      </ScrollView>
      <View style={styles.footer}>
        <ButtonComponent title={strings.next} />
      </View>
    </>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flexGrow: 1,
  },
  buttonView: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: colors.gold,
  },
  headingContainer: {paddingHorizontal: 16, marginBottom: 20},
  heading: {
    ...GlobalStyles.medium_16,
    color: colors.darkBlue,
  },
  counterContainer: {width: deviceWidth, alignItems: 'flex-end'},
  fadedText: {
    opacity: 0.5,
    color: colors.mediumGrey,
    ...GlobalStyles.medium_15,
  },
  footer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.whiteSmoke,
    padding: 20,
    borderTopWidth: 1,
  },
  browseComponent: {
    margin: 16,
    alignSelf: 'stretch',
    paddingVertical: 20,
    borderColor: colors.whiteSmoke,
    borderBottomWidth: 1,
  },
});
