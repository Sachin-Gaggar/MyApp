import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, deviceWidth, GlobalStyles} from '../utils/Constant';
import HeadingPlus from '../assets/svg/Heading Plus.svg';
import BackButton from '../assets/svg/androidHeaderBack.svg';
type Props = {
  title: string;
};
const HeaderComponent = (props: Props) => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <View>
        <BackButton height={15} width={15} style={styles.back} />
      </View>
      <View style={styles.content}>
        <HeadingPlus height={15} width={15}/>
        <Text style={styles.text}> {title}</Text>
      </View>
    </View>
  );
};
export default HeaderComponent;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderColor: colors.whiteSmoke,
    borderBottomWidth: 2,
    backgroundColor: colors.white,
    borderTopWidth: 2,
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    // ...GlobalStyles.medium_blueShade_20,
    fontSize:22,
    color:'red'
  },
  back: {position: 'absolute',bottom:-9},
});
