import {StyleSheet} from 'react-native';
import {iColor} from '../../Theme/Colors';

const getLocalStyles = (color: iColor) => {
  return StyleSheet.create({
    loaderContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: color.background,
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0.5,
    },
  });
};

export default getLocalStyles;
