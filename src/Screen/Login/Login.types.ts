import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Router/Router.types';

export interface iLoginIntialState {
  loginData: Object | null;
  loginLoading: Boolean;
  loginFailure: String;
}
export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;
