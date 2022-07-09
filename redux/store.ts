import { configureStore } from '@reduxjs/toolkit';

import userSlice from './userSlice';
import trainerSlice from './trainerSlice';

export const store = configureStore({
  reducer: {
    userInfo: userSlice,
    trainerInfo: trainerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
