import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import PaginationDots from '@/components/PaginationDots/PaginationDots';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import { horizontalScale, verticalScale } from '@/constants/layout';
import { colors, fonts, onboardingGradient, typography } from '@/constants/theme';
import type { OnboardingStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'OnboardingStepOne'>;

export default function OnboardingStepOneScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient colors={onboardingGradient} style={styles.container}>
      {/* illustration */}
      <Image
        source={require('@/assets/onboarding-1.png')}
        style={styles.illustration}
        resizeMode="contain"
      />

      <View style={[styles.header, { top: insets.top + verticalScale(12) }]}>
        <Text style={styles.title}>
          Take a photo to <Text style={styles.emphasis}>identify</Text> the plant!
        </Text>
        {/* brush underline */}
        <Image
          source={require('@/assets/brush.png')}
          style={styles.brush}
          resizeMode="contain"
        />
      </View>

      <View style={[styles.footer, { bottom: insets.bottom + verticalScale(23) }]}>
        <PrimaryButton
          label="Continue"
          onPress={() => navigation.navigate('OnboardingStepTwo')}
        />
        <PaginationDots count={3} activeIndex={0} />
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
    top: verticalScale(130),
    width: horizontalScale(375),
    height: verticalScale(683),
  },
  header: {
    position: 'absolute',
    left: horizontalScale(24),
    width: horizontalScale(303),
  },
  title: {
    ...typography.title,
    color: colors.text,
  },
  emphasis: {
    fontFamily: fonts.extraBold,
  },
  brush: {
    position: 'absolute',
    left: horizontalScale(179),
    top: verticalScale(34),
    width: horizontalScale(136),
    height: horizontalScale(136) * (13 / 136),
  },
  footer: {
    position: 'absolute',
    left: horizontalScale(24),
    right: horizontalScale(24),
    gap: verticalScale(32),
  },
});
