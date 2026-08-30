import { configureStore } from '@reduxjs/toolkit';

import { plantApi } from './services/plantApi';
import onboardingReducer from './slices/onboardingSlice';

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    [plantApi.reducerPath]: plantApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(plantApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
