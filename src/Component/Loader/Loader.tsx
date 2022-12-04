import {useTheme} from '@react-navigation/native';
import React, {FC} from 'react';
import {View, ActivityIndicator} from 'react-native';
import getLocalStyles from './Loader.styles';
import {LoaderProps, propTypes} from './Loader.types';

const Loader: FC<LoaderProps> = props => {
  const {colors} = useTheme();
  let {loaderContainer} = getLocalStyles(colors);
  if (props) {
    return (
      <View style={loaderContainer}>
        <ActivityIndicator />
      </View>
    );
  }
  return null;
};

Loader.propTypes = propTypes;

export default Loader;
