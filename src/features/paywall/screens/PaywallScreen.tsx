import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import { horizontalScale, moderateScale, verticalScale } from '@/constants/layout';
import { colors, fonts, paywallHeroFade, radii } from '@/constants/theme';
import FeatureCard, { type Feature } from '@/features/paywall/components/FeatureCard/FeatureCard';
import PlanCard from '@/features/paywall/components/PlanCard/PlanCard';
import { useAppDispatch } from '@/store/hooks';
import { completeOnboarding } from '@/store/slices/onboardingSlice';

const FEATURES: Feature[] = [
  { icon: 'scan-outline', title: 'Unlimited', subtitle: 'Plant Identify' },
  { icon: 'speedometer-outline', title: 'Faster', subtitle: 'Process' },
  { icon: 'leaf-outline', title: 'Detailed', subtitle: 'Plant care' },
];

type Plan = 'monthly' | 'yearly';

export default function PaywallScreen() {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const [plan, setPlan] = useState<Plan>('yearly');

  // X and CTA both just finish onboarding
  const finish = () => dispatch(completeOnboarding());

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* hero image */}
      <Image
        source={require('@/assets/paywallPlant.png')}
        style={styles.hero}
        resizeMode="contain"
      />
      <LinearGradient
        colors={paywallHeroFade}
        locations={[0.4, 0.78]}
        style={styles.heroFade}
        pointerEvents="none"
      />

      <Pressable
        onPress={finish}
        hitSlop={12}
        style={[styles.close, { top: insets.top + verticalScale(8) }]}
      >
        <Ionicons name="close" size={moderateScale(16)} color={colors.onDark} />
      </Pressable>

      {/* heading */}
      <View style={styles.heading}>
        <Text>
          <Text style={styles.titleBold}>PlantApp </Text>
          <Text style={styles.titleLight}>Premium</Text>
        </Text>
        <Text style={styles.subtitle}>Access All Features</Text>
      </View>

      {/* feature cards */}
      <FlatList
        data={FEATURES}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <FeatureCard feature={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.featureGap} />}
        contentContainerStyle={styles.featuresContent}
        style={styles.features}
      />

      {/* plans */}
      <View style={styles.plans}>
        <PlanCard
          title="1 Month"
          subtitle="$2.99/month, auto renewable"
          selected={plan === 'monthly'}
          onPress={() => setPlan('monthly')}
        />
        <PlanCard
          title="1 Year"
          subtitle="First 3 days free, then $529,99/year"
          selected={plan === 'yearly'}
          badge="Save 50%"
          onPress={() => setPlan('yearly')}
        />
      </View>

      <PrimaryButton
        label="Try free for 3 days"
        onPress={finish}
        style={[styles.cta, { bottom: insets.bottom + verticalScale(55) }]}
        labelStyle={styles.ctaLabel}
      />

      <Text style={[styles.autoRenew, { bottom: insets.bottom + verticalScale(23) }]}>
        After the 3-day free trial period you&apos;ll be charged $274.99 per year unless
        you cancel before the trial expires. Yearly Subscription is Auto-Renewable
      </Text>

      <Text style={[styles.terms, { bottom: insets.bottom }]}>
        Terms  •  Privacy  •  Restore
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  // ~80% width lands the plant at the figma size
  hero: {
    position: 'absolute',
    alignSelf: 'center',
    top: verticalScale(-20),
    width: horizontalScale(377),
    height: verticalScale(500),
  },
  heroFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: verticalScale(490),
  },
  close: {
    position: 'absolute',
    right: horizontalScale(16),
    width: moderateScale(24),
    height: moderateScale(24),
    borderRadius: moderateScale(12),
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    position: 'absolute',
    left: horizontalScale(24),
    top: verticalScale(264),
    width: horizontalScale(327),
  },
  titleBold: {
    fontFamily: fonts.extraBold,
    fontSize: moderateScale(30),
    lineHeight: moderateScale(36),
    color: colors.onDark,
  },
  titleLight: {
    fontFamily: fonts.light,
    fontSize: moderateScale(30),
    lineHeight: moderateScale(36),
    color: colors.onDark,
  },
  subtitle: {
    fontFamily: fonts.light,
    fontSize: moderateScale(17),
    lineHeight: moderateScale(24),
    letterSpacing: 0.38,
    color: colors.onDarkMuted,
    marginTop: verticalScale(6),
  },
  features: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: verticalScale(355),
    height: verticalScale(130),
  },
  featuresContent: {
    paddingHorizontal: horizontalScale(24),
  },
  featureGap: {
    width: horizontalScale(8),
  },
  plans: {
    position: 'absolute',
    left: horizontalScale(24),
    right: horizontalScale(24),
    top: verticalScale(509),
    gap: verticalScale(16),
  },
  cta: {
    position: 'absolute',
    left: horizontalScale(24),
    right: horizontalScale(24),
    height: verticalScale(52),
    borderRadius: radii.lg,
  },
  ctaLabel: {
    fontFamily: fonts.medium,
    fontWeight: '400',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
  },
  autoRenew: {
    position: 'absolute',
    left: horizontalScale(24),
    right: horizontalScale(24),
    fontFamily: fonts.light,
    fontSize: moderateScale(9),
    lineHeight: moderateScale(12),
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.52)',
  },
  terms: {
    position: 'absolute',
    left: horizontalScale(24),
    right: horizontalScale(24),
    fontFamily: fonts.regular,
    fontSize: moderateScale(11),
    lineHeight: moderateScale(13),
    textAlign: 'center',
    color: colors.onDarkFaint,
  },
});
