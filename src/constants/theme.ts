import { horizontalScale, moderateScale } from './layout';

// values taken from the figma file (iOS Case).
export const colors = {
  primary: '#28AF6E',
  text: '#13231B',
  textMuted: 'rgba(19, 35, 27, 0.7)',
  background: '#FDFFFE',
  white: '#FFFFFF',
  dotActive: '#13231B',
  dotInactive: 'rgba(19, 35, 27, 0.25)',
} as const;


export const spacing = {
  xs: horizontalScale(4),
  sm: horizontalScale(8),
  md: horizontalScale(16),
  lg: horizontalScale(24),
  xl: horizontalScale(32),
} as const;

export const radii = {
  sm: 8,
  md: 12,
  lg: 16,
} as const;

// headings use Rubik
export const fonts = {
  regular: 'Rubik_400Regular',
  medium: 'Rubik_500Medium',
  semiBold: 'Rubik_600SemiBold',
  extraBold: 'Rubik_800ExtraBold',
} as const;

export const typography = {
  title: {
    fontFamily: fonts.medium,
    fontSize: moderateScale(28),
    lineHeight: moderateScale(28),
    letterSpacing: -1,
  },
  body: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    letterSpacing: 0.07,
  },
  button: {
    fontWeight: '700' as const,
    fontSize: moderateScale(15),
    lineHeight: moderateScale(24),
    letterSpacing: -0.24,
  },
} as const;
