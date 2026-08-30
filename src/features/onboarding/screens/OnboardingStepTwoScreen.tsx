import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import PaginationDots from '@/components/PaginationDots/PaginationDots';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import { horizontalScale, verticalScale } from '@/constants/layout';
import { colors, fonts, onboardingGradient, typography } from '@/constants/theme';
import type { OnboardingStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'OnboardingStepTwo'>;

const WHITE_FADE = ['rgba(253, 255, 254, 0)', '#FDFFFE'] as const;

export default function OnboardingStepTwoScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient colors={onboardingGradient} style={styles.container}>
      {/* phone mockup */}
      <Image
        source={require('@/assets/onboarding-2.png')}
        style={styles.illustration}
        resizeMode="contain"
      />
      {/* white fade at the bottom */}
      <LinearGradient colors={WHITE_FADE} style={styles.fade} pointerEvents="none" />

      {/* artwork, top-right */}
      <Image
        source={require('@/assets/artwork.png')}
        style={styles.artwork}
        resizeMode="contain"
      />

      <View style={[styles.header, { top: insets.top + verticalScale(12) }]}>
        <Text style={styles.title}>
          Get plant <Text style={styles.emphasis}>care guides</Text>
        </Text>
        <Image
          source={require('@/assets/brush.png')}
          style={styles.brush}
          resizeMode="contain"
        />
      </View>

      <View style={[styles.footer, { bottom: insets.bottom + verticalScale(23) }]}>
        <PrimaryButton
          label="Continue"
          onPress={() => navigation.navigate('Paywall')}
        />
        <PaginationDots count={3} activeIndex={1} />
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
    top: verticalScale(182),
    width: horizontalScale(261),
    height: verticalScale(540),
  },
  fade: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: verticalScale(577),
    height: verticalScale(235),
  },
  // exported at frame width, already sits top-right
  artwork: {
    position: 'absolute',
    left: 0,
    top: verticalScale(128),
    width: horizontalScale(375),
    height: verticalScale(270),
  },
  header: {
    position: 'absolute',
    left: horizontalScale(24),
    width: horizontalScale(300),
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
    left: horizontalScale(119),
    top: verticalScale(36),
    width: horizontalScale(152),
    height: horizontalScale(152) * (13 / 152),
  },
  footer: {
    position: 'absolute',
    left: horizontalScale(24),
    right: horizontalScale(24),
    gap: verticalScale(32),
  },
});
