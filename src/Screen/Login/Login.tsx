import React from 'react';
import {View, Text} from 'react-native';
import Strings from '../../Utils/Strings';
import localStyles from './Login.styles';
import {LoginScreenProps} from './Login.types';

const Login: React.FC<LoginScreenProps> = () => {
  return (
    <View style={localStyles.rootContainer}>
      <Text>{Strings.LOGIN}</Text>
    </View>
  );
};

export default Login;
