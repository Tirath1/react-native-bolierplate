import React, {FC} from 'react';
import {Text} from 'react-native';
import {TextProps} from './Text.types';
import localStyles from './Text.styles';
import {TEXT_SIZE, TEXT_WEIGHT} from '../../Utils/Constants';

const TextView: FC<TextProps> = ({style, size, children, weight}) => {
  const getSize = (textSize: string | null | undefined) => {
    if (textSize) {
      return localStyles[textSize];
    } else {
      return localStyles[TEXT_SIZE.H1];
    }
  };

  const getWeight = (textWeight: string | null | undefined) => {
    if (textWeight) {
      return localStyles[textWeight];
    } else {
      return localStyles[TEXT_WEIGHT.DEFAULT];
    }
  };

  return (
    <Text style={[style, getSize(size), getWeight(weight)]}>{children}</Text>
  );
};

export default TextView;
