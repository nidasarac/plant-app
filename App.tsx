import {
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/rubik';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import RootNavigator from '@/navigation/RootNavigator';
import { store } from '@/store';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { loadOnboardingStatus } from '@/store/slices/onboardingSlice';

SplashScreen.preventAutoHideAsync();

function Root() {
  const dispatch = useAppDispatch();
  const hydrated = useAppSelector((state) => state.onboarding.hydrated);
  const [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_800ExtraBold,
  });

  useEffect(() => {
    dispatch(loadOnboardingStatus());
  }, [dispatch]);

  const ready = fontsLoaded && hydrated;

  useEffect(() => {
    if (ready) {
      SplashScreen.hideAsync();
    }
  }, [ready]);

  // wait for fonts and the persisted onboarding flag before showing anything
  if (!ready) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="dark" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
