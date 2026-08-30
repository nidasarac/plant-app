import { useAppSelector } from '@/store/hooks';

import OnboardingNavigator from './OnboardingNavigator';
import TabNavigator from './TabNavigator';

export default function RootNavigator() {
  const completed = useAppSelector((state) => state.onboarding.completed);

  return completed ? <TabNavigator /> : <OnboardingNavigator />;
}
