import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import { horizontalScale, verticalScale } from '@/constants/layout';
import { colors, fonts, onboardingGradient, typography } from '@/constants/theme';
import type { OnboardingStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'GetStarted'>;

export default function GetStartedScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient colors={onboardingGradient} style={styles.container}>
      {/* illustration */}
      <Image
        source={require('@/assets/getstarted.png')}
        style={styles.illustration}
        resizeMode="contain"
      />

      {/* header */}
      <View style={[styles.header, { top: insets.top + verticalScale(12) }]}>
        <Text style={styles.title}>
          Welcome to <Text style={styles.titleBold}>PlantApp</Text>
        </Text>
        <Text style={styles.subtitle}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
      </View>

      {/* CTA + legal */}
      <View style={[styles.footer, { bottom: insets.bottom + verticalScale(55) }]}>
        <PrimaryButton
          label="Get Started"
          onPress={() => navigation.navigate('OnboardingStepOne')}
        />
        <Text style={styles.legal}>
          By tapping next, you are agreeing to PlantID{' '}
          <Text style={styles.legalLink}>Terms of Use</Text> &{' '}
          <Text style={styles.legalLink}>Privacy Policy</Text>.
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  illustration: {
    position: 'absolute',
    alignSelf: 'center',
    top: verticalScale(155),
    width: horizontalScale(375),
    height: verticalScale(499),
  },
  header: {
    position: 'absolute',
    left: horizontalScale(24),
    width: horizontalScale(300),
  },
  title: {
    ...typography.titleLoose,
    color: colors.text,
  },
  titleBold: {
    fontFamily: fonts.semiBold,
  },
  subtitle: {
    ...typography.body,
    color: colors.textMuted,
    marginTop: verticalScale(8),
  },
  footer: {
    position: 'absolute',
    left: horizontalScale(24),
    right: horizontalScale(24),
  },
  legal: {
    ...typography.legal,
    color: colors.textFaint,
    textAlign: 'center',
    marginTop: verticalScale(13),
    paddingHorizontal: horizontalScale(45),
  },
  legalLink: {
    textDecorationLine: 'underline',
  },
});
