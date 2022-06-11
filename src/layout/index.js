import {Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const COLORS = {
  PRIMARY: '#59b828',
  SECONDARY: '#F9F9F9',
  BACKGROUNDGREY: '#dedcdc',
  GREY: '#808080',
  DANGER: '#FF0000',
  BLACK: '#000000',
};
const FONTS = {
  LIGHT: 'Rubik-Light',
  REGULAR: 'Rubik-Regular',
  MEDIUM: 'Rubik-Medium',
  SEMI_BOLD: 'Rubik-SemiBold',
};

export const LAYOUT = {
  WIDTH,
  HEIGHT,
  COLORS,
  FONTS,
};
