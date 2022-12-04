import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {View, Text, Button} from 'react-native';
import {ThemeContext} from '../../Router/RootNavigator';
import {RootStackParamList} from '../../Router/Router.types';
import {THEME_TYPE} from '../../Utils/Constants';
import Strings from '../../Utils/Strings';
import localStyles from './Home.styles';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
const Home: React.FC<HomeScreenProps> = () => {
  const {setTheme, theme} = React.useContext(ThemeContext);

  const switchTheme = useCallback(() => {
    setTheme(theme === THEME_TYPE.LIGHT ? THEME_TYPE.DARK : THEME_TYPE.LIGHT);
  }, [theme, setTheme]);
  return (
    <View style={localStyles.rootContainer}>
      <Text>{Strings.HOME}</Text>
      <Button title={Strings.SWITCH_THEME} onPress={switchTheme} />
    </View>
  );
};

export default Home;
