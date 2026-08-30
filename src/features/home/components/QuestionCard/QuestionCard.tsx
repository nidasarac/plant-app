import { LinearGradient } from 'expo-linear-gradient';
import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';

import { horizontalScale, moderateScale, verticalScale } from '@/constants/layout';
import { colors, fonts, radii, questionCardTint } from '@/constants/theme';
import type { Question } from '@/types/plant';

type QuestionCardProps = {
  question: Question;
};

// stack order: green wash, photo, dark tint, title strip
export default function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Pressable style={styles.card} onPress={() => Linking.openURL(question.uri)}>
      <LinearGradient
        colors={questionCardTint}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.fill}
      />
      <Image source={{ uri: question.imageUri }} style={styles.fill} resizeMode="cover" />
      <View style={[styles.fill, styles.darken]} />
      <View style={styles.strip}>
        <Text style={styles.title}>{question.title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: horizontalScale(240),
    height: verticalScale(164),
    borderRadius: radii.md,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  fill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  darken: {
    backgroundColor: colors.questionScrim,
  },
  strip: {
    height: verticalScale(64),
    paddingHorizontal: horizontalScale(14),
    justifyContent: 'center',
    backgroundColor: colors.questionStrip,
    borderTopWidth: 1,
    borderTopColor: colors.questionStripBorder,
  },
  title: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(15),
    lineHeight: moderateScale(20),
    letterSpacing: -0.24,
    color: colors.white,
    width: horizontalScale(200),
  },
});
