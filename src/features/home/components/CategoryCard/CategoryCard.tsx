import { Image, StyleSheet, Text, View } from 'react-native';

import { horizontalScale, moderateScale, verticalScale } from '@/constants/layout';
import { colors, fonts, radii } from '@/constants/theme';
import type { Category } from '@/types/plant';

type CategoryCardProps = {
  category: Category;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <View style={styles.card}>
      <Image
        testID="category-image"
        source={{ uri: category.imageUrl }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{category.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    aspectRatio: 158 / 152,
    borderRadius: radii.md,
    borderWidth: 0.5,
    borderColor: colors.categoryCardBorder,
    backgroundColor: colors.categoryCard,
    padding: horizontalScale(16),
    overflow: 'hidden',
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: moderateScale(16),
    lineHeight: moderateScale(21),
    letterSpacing: -0.32,
    color: colors.text,
  },
  // plant overflows the bottom-right corner
  image: {
    position: 'absolute',
    right: horizontalScale(-4),
    bottom: verticalScale(-2),
    width: horizontalScale(116),
    height: verticalScale(122),
  },
});
