import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const STORAGE_KEY = 'onboarding-completed';

type OnboardingState = {
  completed: boolean;
  // true after the AsyncStorage read - nav waits on it
  hydrated: boolean;
};

const initialState: OnboardingState = {
  completed: false,
  hydrated: false,
};

export const loadOnboardingStatus = createAsyncThunk('onboarding/load', async () => {
  const value = await AsyncStorage.getItem(STORAGE_KEY);
  return value === 'true';
});

// thunk so the storage write is awaited before state flips
export const completeOnboarding = createAsyncThunk('onboarding/complete', async () => {
  await AsyncStorage.setItem(STORAGE_KEY, 'true');
});

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadOnboardingStatus.fulfilled, (state, action) => {
        state.completed = action.payload;
        state.hydrated = true;
      })
      .addCase(loadOnboardingStatus.rejected, (state) => {
        state.hydrated = true;
      })
      .addCase(completeOnboarding.fulfilled, (state) => {
        state.completed = true;
      });
  },
});

export default onboardingSlice.reducer;
