import {StyleSheet} from 'react-native';
import {TEXT_SIZE, TEXT_WEIGHT} from '../../Utils/Constants';

//TODO: need to set the size,and weight and font
export default StyleSheet.create({
  [TEXT_SIZE.H1]: {
    fontSize: 8,
  },
  [TEXT_SIZE.H2]: {
    fontSize: 8,
  },
  [TEXT_SIZE.H3]: {
    fontSize: 8,
  },
  [TEXT_SIZE.H4]: {
    fontSize: 8,
  },
  [TEXT_SIZE.H5]: {
    fontSize: 8,
  },
  [TEXT_SIZE.H6]: {
    fontSize: 8,
  },
  [TEXT_WEIGHT.DARK]: {
    fontWeight: 'bold',
  },
  [TEXT_WEIGHT.LIGHT]: {
    fontWeight: '400',
  },
  [TEXT_WEIGHT.DEFAULT]: {
    fontWeight: '500',
  },
});
