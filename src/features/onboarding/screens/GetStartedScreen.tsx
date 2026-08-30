import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';

import type { OnboardingStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'GetStarted'>;

export default function GetStartedScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started</Text>
      <Button title="Get Started" onPress={() => navigation.navigate('OnboardingStepOne')} />
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
