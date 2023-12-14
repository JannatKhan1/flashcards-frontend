import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import setReducer from '../features/sets/setSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sets: setReducer,
  },
});
