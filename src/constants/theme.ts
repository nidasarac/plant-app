import { horizontalScale, moderateScale } from './layout';

// all pulled from figma
export const colors = {
  primary: '#28AF6E',
  text: '#13231B',
  textMuted: 'rgba(19, 35, 27, 0.7)',
  background: '#FDFFFE',
  white: '#FFFFFF',
  dotActive: '#13231B',
  dotInactive: 'rgba(19, 35, 27, 0.25)',
  tabInactive: 'rgba(19, 35, 27, 0.4)',
  // get started legal line
  textFaint: 'rgba(89, 113, 101, 0.7)',

  // animated splash
  splash: '#F7F7F7',
  track: 'rgba(19, 35, 27, 0.08)',

  // home
  screen: '#FBFAFA',
  headerWash: 'rgba(247, 247, 247, 0.1)',
  hairline: 'rgba(60, 60, 67, 0.1)',
  searchField: 'rgba(255, 255, 255, 0.88)',
  searchFieldBorder: 'rgba(60, 60, 67, 0.25)',
  searchPlaceholder: '#AFAFAF',
  searchIcon: '#ABABAB',
  premiumCard: '#24201A',
  premiumGold: '#E6C990',
  premiumGoldMuted: 'rgba(255, 222, 156, 0.8)',
  premiumBadge: 'rgba(232, 44, 19, 0.9)',
  premiumArrow: '#D0B070',
  questionScrim: 'rgba(0, 0, 0, 0.15)',
  questionStrip: 'rgba(0, 0, 0, 0.2)',
  questionStripBorder: 'rgba(255, 255, 255, 0.1)',
  categoryCard: '#F4F6F6',
  categoryCardBorder: 'rgba(41, 187, 137, 0.18)',
  tabBar: 'rgba(255, 255, 255, 0.92)',
  tabBarDivider: 'rgba(19, 35, 27, 0.1)',
  tabIconInactive: '#BDBDBD',
  tabLabelInactive: '#979798',
  scanRing: 'rgba(255, 255, 255, 0.24)',
  // paywall (dark screen)
  backgroundDark: '#101E17',
  onDark: '#FFFFFF',
  onDarkMuted: 'rgba(255, 255, 255, 0.7)',
  onDarkFaint: 'rgba(255, 255, 255, 0.5)',
  glass: 'rgba(255, 255, 255, 0.08)',
} as const;

// onboarding background wash
export const onboardingGradient = ['#F8FAFF', '#FAFAFA'] as const;
// paywall hero image fade
export const paywallHeroFade = ['rgba(16, 30, 23, 0)', '#101E17'] as const;
// selected plan card glow
export const planGlow = ['rgba(40, 175, 110, 0.17)', 'rgba(40, 175, 110, 0)'] as const;
export const scanButtonGradient = ['#28AF6E', '#2CCC80'] as const;
// green wash over the "get started" cards
export const questionCardTint = ['rgba(189, 211, 171, 0.72)', 'rgba(124, 148, 113, 0.72)'] as const;

// 24 = screen padding everywhere in figma
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
  lg: 14,
  xl: 16,
} as const;

// headings use Rubik, body falls back to the system font
export const fonts = {
  light: 'Rubik_300Light',
  regular: 'Rubik_400Regular',
  medium: 'Rubik_500Medium',
  semiBold: 'Rubik_600SemiBold',
  extraBold: 'Rubik_800ExtraBold',
} as const;

export const typography = {
  // onboarding 1 & 2 headings
  title: {
    fontFamily: fonts.medium,
    fontSize: moderateScale(28),
    lineHeight: moderateScale(33),
    letterSpacing: -1,
  },
  // get started heading - lighter, looser
  titleLoose: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(28),
    lineHeight: moderateScale(33),
    letterSpacing: 0.07,
  },
  body: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    letterSpacing: 0.07,
  },
  // onboarding CTA - system font, bold
  button: {
    fontWeight: '700' as const,
    fontSize: moderateScale(15),
    lineHeight: moderateScale(24),
    letterSpacing: -0.24,
  },
  legal: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(11),
    lineHeight: moderateScale(15),
    letterSpacing: 0.07,
  },
} as const;
