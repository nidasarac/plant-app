import { useCallback } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { horizontalScale, moderateScale, verticalScale } from '@/constants/layout';
import { colors, fonts } from '@/constants/theme';
import CategoryCard from '@/features/home/components/CategoryCard/CategoryCard';
import PremiumBanner from '@/features/home/components/PremiumBanner/PremiumBanner';
import QuestionCard from '@/features/home/components/QuestionCard/QuestionCard';
import SearchBar from '@/features/home/components/SearchBar/SearchBar';
import { useGetCategoriesQuery, useGetQuestionsQuery } from '@/store/services/plantApi';
import type { Category, Question } from '@/types/plant';

const HEADER_BODY = verticalScale(128);

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const categories = useGetCategoriesQuery();
  const questions = useGetQuestionsQuery();

  const renderCategory = useCallback(
    ({ item }: { item: Category }) => <CategoryCard category={item} />,
    [],
  );
  const renderQuestion = useCallback(
    ({ item }: { item: Question }) => <QuestionCard question={item} />,
    [],
  );

  const listHeader = (
    <View style={styles.listHeader}>
      <PremiumBanner />
      <Text style={styles.sectionTitle}>Get Started</Text>
      <FlatList
        horizontal
        data={questions.data}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderQuestion}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={QuestionGap}
        ListEmptyComponent={questions.isLoading ? <ActivityIndicator /> : null}
      />
    </View>
  );

  if (categories.isError) {
    return (
      <View style={[styles.container, styles.center, { paddingTop: insets.top }]}>
        <Text style={styles.errorText}>We couldn&apos;t load the plants.</Text>
        <Pressable style={styles.retry} onPress={() => categories.refetch()}>
          <Text style={styles.retryText}>Try again</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={categories.data}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderCategory}
        numColumns={2}
        columnWrapperStyle={styles.gridRow}
        contentContainerStyle={[
          styles.listContent,
          { paddingTop: insets.top + HEADER_BODY + verticalScale(20) },
        ]}
        ListHeaderComponent={listHeader}
        ListEmptyComponent={
          categories.isLoading ? <ActivityIndicator style={styles.loader} /> : null
        }
        showsVerticalScrollIndicator={false}
      />

      <View style={[styles.header, { height: insets.top + HEADER_BODY }]}>
        <Image source={require('@/assets/background.png')} style={styles.headerImage} />
        <View style={styles.headerWash} />
        <View style={[styles.headerContent, { paddingTop: insets.top }]}>
          <View style={styles.titles}>
            <Text style={styles.greeting}>Hi, plant lover!</Text>
            <Text style={styles.headline}>Good Afternoon! ⛅</Text>
          </View>
          <View style={styles.searchWrap}>
            <SearchBar />
          </View>
        </View>
      </View>
    </View>
  );
}

function QuestionGap() {
  return <View style={styles.questionGap} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screen,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: verticalScale(16),
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.hairline,
    overflow: 'hidden',
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerWash: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.headerWash,
  },
  headerContent: {
    flex: 1,
    paddingHorizontal: horizontalScale(24),
  },
  titles: {
    gap: verticalScale(6),
    marginTop: verticalScale(2),
  },
  greeting: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(16),
    lineHeight: moderateScale(19),
    letterSpacing: 0.07,
    color: colors.text,
  },
  headline: {
    fontFamily: fonts.medium,
    fontSize: moderateScale(24),
    lineHeight: moderateScale(28),
    letterSpacing: 0.35,
    color: colors.text,
  },
  searchWrap: {
    marginTop: verticalScale(14),
  },
  listContent: {
    paddingHorizontal: horizontalScale(24),
    paddingBottom: verticalScale(120),
  },
  listHeader: {
    marginBottom: verticalScale(24),
  },
  sectionTitle: {
    fontFamily: fonts.medium,
    fontSize: moderateScale(15),
    lineHeight: moderateScale(20),
    letterSpacing: -0.24,
    color: colors.text,
    marginTop: verticalScale(24),
    marginBottom: verticalScale(16),
  },
  questionGap: {
    width: horizontalScale(10),
  },
  gridRow: {
    gap: horizontalScale(11),
    marginBottom: verticalScale(16),
  },
  loader: {
    marginTop: verticalScale(40),
  },
  errorText: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(15),
    color: colors.textMuted,
  },
  retry: {
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(10),
    backgroundColor: colors.primary,
  },
  retryText: {
    fontFamily: fonts.medium,
    fontSize: moderateScale(14),
    color: colors.white,
  },
});
