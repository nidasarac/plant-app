import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';

import type { OnboardingStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'OnboardingStepTwo'>;

export default function OnboardingStepTwoScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Onboarding 2</Text>
      <Button title="Continue" onPress={() => navigation.navigate('Paywall')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
});
