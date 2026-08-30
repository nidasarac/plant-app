import { useState } from 'react';

import OnboardingNavigator from './OnboardingNavigator';
import TabNavigator from './TabNavigator';

export default function RootNavigator() {
  // local until the onboarding slice is added
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);

  if (onboardingCompleted) {
    return <TabNavigator />;
  }

  return <OnboardingNavigator onFinish={() => setOnboardingCompleted(true)} />;
}
