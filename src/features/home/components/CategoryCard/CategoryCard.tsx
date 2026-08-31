import { Image, StyleSheet, Text, View } from 'react-native';

import { horizontalScale, moderateScale } from '@/constants/layout';
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
        resizeMode="cover"
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
  // the api images already sit the plant in the bottom-right with transparent
  // padding; anchoring the (slightly oversized) image there matches figma
  image: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '118%',
    height: '118%',
  },
});
