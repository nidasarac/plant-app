import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// every figma frame is 375 x 812
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

export const horizontalScale = (size: number) => (width / BASE_WIDTH) * size;

export const verticalScale = (size: number) => (height / BASE_HEIGHT) * size;

// used for font sizes
export const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;
