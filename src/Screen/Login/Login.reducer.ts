import {createSlice} from '@reduxjs/toolkit';
import {iLoginIntialState} from './Login.types';

const initialState: iLoginIntialState = {
  loginData: null,
  loginLoading: false,
  loginFailure: '',
};

const LoginReducer = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    loginLoading(state) {
      state.loginLoading = true;
    },
    detailSuccess(state, action) {
      state.loginLoading = false;
      state.loginData = action.payload;
      state.loginFailure = '';
    },
    loginFailure(state, action) {
      state.loginLoading = false;
      state.loginFailure = action.payload;
    },
  },
});

export const loginActions = LoginReducer.actions;

export default LoginReducer.reducer;
