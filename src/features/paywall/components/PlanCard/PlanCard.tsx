import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { horizontalScale, moderateScale, verticalScale } from '@/constants/layout';
import { colors, fonts, planGlow, radii } from '@/constants/theme';

type PlanCardProps = {
  title: string;
  subtitle: string;
  selected: boolean;
  badge?: string;
  onPress: () => void;
};

export default function PlanCard({ title, subtitle, selected, badge, onPress }: PlanCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.card, selected ? styles.selected : styles.unselected]}
    >
      {selected ? (
        <LinearGradient
          colors={planGlow}
          start={{ x: 1, y: 0.5 }}
          end={{ x: 0, y: 0.5 }}
          locations={[0, 0.69]}
          style={StyleSheet.absoluteFill}
          pointerEvents="none"
        />
      ) : null}

      <View style={[styles.radio, selected && styles.radioSelected]}>
        {selected ? <View style={styles.radioDot} /> : null}
      </View>

      <View style={styles.texts}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      {badge ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    height: verticalScale(60),
    borderRadius: radii.lg,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    gap: horizontalScale(12),
    overflow: 'hidden',
  },
  selected: {
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  unselected: {
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  radio: {
    width: moderateScale(24),
    height: moderateScale(24),
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderWidth: moderateScale(8),
    borderColor: colors.primary,
    backgroundColor: colors.onDark,
  },
  radioDot: {
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: moderateScale(4),
    backgroundColor: colors.onDark,
  },
  texts: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: moderateScale(16),
    lineHeight: moderateScale(19),
    color: colors.onDark,
  },
  subtitle: {
    fontFamily: fonts.light,
    fontSize: moderateScale(12),
    lineHeight: moderateScale(14),
    color: colors.onDarkMuted,
    marginTop: verticalScale(3),
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: colors.primary,
    paddingHorizontal: horizontalScale(12),
    height: verticalScale(26),
    justifyContent: 'center',
    borderTopRightRadius: radii.lg,
    borderBottomLeftRadius: moderateScale(20),
  },
  badgeText: {
    fontFamily: fonts.medium,
    fontSize: moderateScale(12),
    lineHeight: moderateScale(18),
    color: colors.onDark,
  },
});
