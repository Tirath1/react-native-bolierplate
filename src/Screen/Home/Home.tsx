import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../../Router/Router.types';
import Strings from '../../Utils/Strings';
import localStyles from './Home.styles';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  NAVIGATION_KEYS.HOME
>;
const Home: React.FC<HomeScreenProps> = () => {
  return (
    <View style={localStyles.rootContainer}>
      <Text>{Strings.HOME}</Text>
    </View>
  );
};

export default Home;
