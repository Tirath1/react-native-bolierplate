import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import Strings from '../../Utils/Strings';
import getLocalStyles from './Login.styles';
import {LoginScreenProps} from './Login.types';
import {iColor} from '../../Theme/Colors';

const Login: React.FC<LoginScreenProps> = () => {
  const {colors}: {colors: iColor} = useTheme();
  const {rootContainer, headerText} = getLocalStyles(colors);
  return (
    <View style={rootContainer}>
      <Text style={headerText}>{Strings.LOGIN}</Text>
    </View>
  );
};

export default Login;
