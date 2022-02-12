import React from 'react';
import {View, StyleSheet} from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import WrapperComponent from '../../components/WrapperComponent';
import {colors, screenNames} from '../../utils/Constant';

const HomeScreen = (props: any) => {
  const onPress = () => {
    props.navigation.navigate(screenNames.mapScreenHomePage);
  };
  return (
    <View style={styles.container}>
      <ButtonComponent title={'Map Ui'} onPress={onPress} />
    </View>
  );
};
export default WrapperComponent(HomeScreen);
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.orangeYellowCrayola,
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
