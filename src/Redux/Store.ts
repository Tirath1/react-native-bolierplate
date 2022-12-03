import {configureStore} from '@reduxjs/toolkit';
import LoginReducer from '../Screen/Login/Login.reducer';
import {useDispatch} from 'react-redux';

const store = configureStore({
  reducer: {
    LoginReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
