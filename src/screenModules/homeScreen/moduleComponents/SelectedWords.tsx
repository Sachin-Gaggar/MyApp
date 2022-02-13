import React, {useEffect, useReducer, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import ButtonComponent from '../../../components/ButtonComponent';
import {colors, GlobalStyles} from '../../../utils/Constant';
import BrowseComponent from './BrowseComponent';
type Props = {
  selectedWords?: string[];
  onDelete: Function;
};
const SelectedKeywords = (props: Props) => {
  const {selectedWords, onDelete} = props;
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const activeWords = useRef<Set<string>>(new Set()).current;
  const onDeletePress = () => {
    onDelete([...activeWords]);
    activeWords.clear();
  };
  const onPress = (item: string) => {
    if (activeWords.has(item)) {
      activeWords.delete(item);
    } else {
      activeWords.add(item);
    }
    forceUpdate();
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.browseComponent}>
          <BrowseComponent
            totalActiveKeywords={activeWords.size}
            onDeletePress={onDeletePress}
          />
        </View>
        <View style={styles.selectedView}>
          {selectedWords?.map((item: string, index: number) => {
            return (
              <ButtonComponent
                title={item}
                onPress={() => onPress(item)}
                key={index}
                textStyle={styles.addText}
                buttonStyle={
                  activeWords.has(item) ? styles.activeButton : styles.button
                }
              />
            );
          })}
        </View>
      </View>
    </>
  );
};
export default SelectedKeywords;
const styles = StyleSheet.create({
  container: {
    width: '100%',

    flex: 1,
  },
  selectedView: {
    paddingHorizontal: 16,
    ...GlobalStyles.rowAlignCenter,
    flexWrap: 'wrap',
    flex: 1,
  },
  button: {
    padding: 4,
    borderRadius: 5,
    backgroundColor: colors.blueBadge,
    borderColor: colors.selectedBorder,
    borderWidth: 1,
    marginBottom: 5,
    marginRight: 3,
  },
  addText: {
    ...GlobalStyles.medium_14,
    color: colors.white,
  },
  activeButton: {
    padding: 4,
    borderRadius: 5,
    marginBottom: 5,
    borderColor: colors.selectedBorder,
    borderWidth: 1,
    marginRight: 3,
    backgroundColor: colors.activeColor,
  },
  browseComponent: {
    margin: 16,
    alignSelf: 'stretch',
    paddingTop: 20,
    paddingVertical: 15,
    borderColor: colors.whiteSmoke,
    borderBottomWidth: 1,
  },
});
