import {useTheme} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {View, Text, Button} from 'react-native';
import Strings from '../../Utils/Strings';
import getLocalStyles from './Login.styles';
import {LoginScreenProps} from './Login.types';
import {iColor} from '../../Theme/Colors';

const Login: React.FC<LoginScreenProps> = ({navigation}) => {
  const {colors}: {colors: iColor} = useTheme();
  const {rootContainer, headerText} = getLocalStyles(colors);

  const navigateToHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={rootContainer}>
      <Text style={headerText}>{Strings.LOGIN}</Text>
      <Button title={Strings.NAVIGATE_TO_HOME} onPress={navigateToHome} />
    </View>
  );
};

export default Login;
