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
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import AnimatedSplash from '@/components/AnimatedSplash/AnimatedSplash';
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
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    dispatch(loadOnboardingStatus());
  }, [dispatch]);

  // drop the native splash once fonts load, AnimatedSplash takes over
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="dark" />
      </NavigationContainer>
      {!splashDone && (
        <AnimatedSplash ready={hydrated} onFinish={() => setSplashDone(true)} />
      )}
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
