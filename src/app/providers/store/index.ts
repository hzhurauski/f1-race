import { configureStore } from '@reduxjs/toolkit';
import { driverReducer } from '@entities/driver/model/slice.ts';

export const store = configureStore({
  reducer: {
    driver: driverReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
