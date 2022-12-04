import {ColorValue} from 'react-native';
import palette from './Pallete';

export interface iColor {
  text: ColorValue;
  background: ColorValue;
  primary: ColorValue;
  card: ColorValue;
  border: ColorValue;
  notification: ColorValue;
}

export interface iTheme {
  dark: Boolean;
  colors: iColor;
}

export const lightThemeColor = {
  dark: true,
  colors: {
    text: palette.black,
    background: palette.white,
    primary: palette.white,
    card: palette.white,
    border: palette.white,
    notification: palette.white,
  },
};

export const darkThemeColor = {
  dark: true,
  colors: {
    background: palette.black,
    text: palette.white,
    primary: palette.white,
    card: palette.white,
    border: palette.white,
    notification: palette.white,
  },
};
