import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { horizontalScale, moderateScale, verticalScale } from '@/constants/layout';
import { colors, fonts, radii } from '@/constants/theme';

export type Feature = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
};

type FeatureCardProps = {
  feature: Feature;
};

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconBox}>
        <Ionicons name={feature.icon} size={moderateScale(17)} color={colors.onDark} />
      </View>
      <View style={styles.texts}>
        <Text style={styles.title} numberOfLines={1}>
          {feature.title}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {feature.subtitle}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: horizontalScale(156),
    height: verticalScale(130),
    borderRadius: radii.lg,
    backgroundColor: colors.glass,
  },
  iconBox: {
    position: 'absolute',
    left: horizontalScale(16),
    top: verticalScale(16),
    width: moderateScale(36),
    height: moderateScale(36),
    borderRadius: radii.sm,
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts: {
    position: 'absolute',
    left: horizontalScale(16),
    top: verticalScale(68),
    gap: verticalScale(4),
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: moderateScale(20),
    lineHeight: moderateScale(24),
    letterSpacing: 0.38,
    color: colors.onDark,
  },
  subtitle: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(13),
    lineHeight: moderateScale(18),
    letterSpacing: -0.08,
    color: colors.onDarkMuted,
  },
});
