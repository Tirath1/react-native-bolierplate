import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Router/Router.types';
import NAVIGATION_KEYS from '../../Router/NavigationKeys';

export interface iLoginIntialState {
  loginData: Object | null;
  loginLoading: Boolean;
  loginFailure: String;
}
export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  NAVIGATION_KEYS.LOGIN
>;
