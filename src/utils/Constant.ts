import {Dimensions} from 'react-native';

export const colors = {
  red: '#ff0000',
  white: '#ffffff',
  black: '#000000',
  yellow: '#FFFF00',
  green: '#008000',
  blue: '#0000FF',
  orangeYellowCrayola: '#FED766',
  spanishBlue: '#296eb4',
  gold: '#b1740f',
  honeyYellow: '#fdb833',
  dodgerBlue: '#1789fc',
  whiteSmoke: '#f5f5f5',
  mediumGrey: '#979797',
  placeHolder: '#D0CFD3',
  blueShade: '#00006F',
  darkBlue: '#252880',
  addTextBackground: '#F6F6F6',
  selectedWords: '#F6F6F8',
  selectedBorder: '#EAEAEA',
  activeColor: '#ADD8E6',
};

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const screenNames = {
  startupScreen: 'Start Up Screen',
  homeScreen: 'Home Screen',
  mapScreenHomePage: 'Map Screen Home Page',
};

export const imagePath = {
  mic: require('../assets/image/mic.png'),
};

export const subText = [
  'Table',
  'Chair',
  'Bible',
  'IPhone 7',
  'Bike Blue UK 9 Running Shoes',
  'Red Shirt',
  'BMW X5 Car',
  'RV',
  'Airgun',
  'Drone',
  'Rain Coat',
  'Horse',
];

export const GlobalStyles = {
  medium_blueShade_20: {
    fontFamily: 'Heebo-Medium',
    fontSize: 20,
    color: colors.blueShade,
  },
  medium_16: {
    fontFamily: 'Heebo-Medium',
    fontSize: 16,
  },
  medium_15: {
    fontFamily: 'Heebo-Medium',
    fontSize: 15,
  },
  medium_14: {
    fontFamily: 'Heebo-Medium',
    fontSize: 14,
  },
  medium_12: {
    fontFamily: 'Heebo-Medium',
    fontSize: 12,
  },
  rowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowJustifyCenter:{
    flexDirection: 'row',
    justifyContent: 'center'
  },
};
