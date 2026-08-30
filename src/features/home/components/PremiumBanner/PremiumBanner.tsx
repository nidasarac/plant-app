import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { horizontalScale, moderateScale, verticalScale } from '@/constants/layout';
import { colors, radii } from '@/constants/theme';

// system font here (figma), so no fontFamily - just weight
export default function PremiumBanner() {
  return (
    <Pressable style={styles.card}>
      <View style={styles.iconWrap}>
        <Ionicons name="mail" size={moderateScale(26)} color={colors.premiumGold} />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>1</Text>
        </View>
      </View>

      <View style={styles.texts}>
        <Text style={styles.title}>FREE Premium Available</Text>
        <Text style={styles.subtitle}>Tap to upgrade your account!</Text>
      </View>

      <Ionicons name="chevron-forward" size={moderateScale(20)} color={colors.premiumArrow} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(64),
    paddingLeft: horizontalScale(20),
    paddingRight: horizontalScale(12),
    borderRadius: radii.md,
    backgroundColor: colors.premiumCard,
  },
  iconWrap: {
    width: horizontalScale(36),
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: verticalScale(-4),
    right: 0,
    width: moderateScale(15),
    height: moderateScale(15),
    borderRadius: moderateScale(8),
    backgroundColor: colors.premiumBadge,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontWeight: '700',
    fontSize: moderateScale(9),
    color: colors.white,
  },
  texts: {
    flex: 1,
    marginLeft: horizontalScale(10),
  },
  title: {
    fontWeight: '700',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(21),
    letterSpacing: -0.32,
    color: colors.premiumGold,
    textShadowColor: 'rgba(0, 0, 0, 0.32)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontWeight: '400',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(16),
    color: colors.premiumGoldMuted,
  },
});
