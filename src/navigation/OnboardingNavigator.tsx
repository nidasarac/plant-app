import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetStartedScreen from '@/features/onboarding/screens/GetStartedScreen';
import OnboardingStepOneScreen from '@/features/onboarding/screens/OnboardingStepOneScreen';
import OnboardingStepTwoScreen from '@/features/onboarding/screens/OnboardingStepTwoScreen';
import PaywallScreen from '@/features/paywall/screens/PaywallScreen';

import type { OnboardingStackParamList } from './types';

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

type OnboardingNavigatorProps = {
  onFinish: () => void;
};

export default function OnboardingNavigator({ onFinish }: OnboardingNavigatorProps) {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="OnboardingStepOne" component={OnboardingStepOneScreen} />
      <Stack.Screen name="OnboardingStepTwo" component={OnboardingStepTwoScreen} />
      <Stack.Screen name="Paywall">
        {() => <PaywallScreen onClose={onFinish} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
