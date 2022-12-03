import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screen/Home/Home';
import Login from '../Screen/Login/Login';
import {RootStackParamList} from './Router.types';

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC<any> = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name={'Login'} component={Login} />
        <RootStack.Screen name={'Home'} component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
