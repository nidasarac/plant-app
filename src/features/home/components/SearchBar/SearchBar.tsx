import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

import { horizontalScale, moderateScale, verticalScale } from '@/constants/layout';
import { colors, fonts, radii } from '@/constants/theme';

// not wired to anything - just the visual
export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={moderateScale(18)} color={colors.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder="Search for plants"
        placeholderTextColor={colors.searchPlaceholder}
        editable={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(9),
    height: verticalScale(44),
    paddingHorizontal: horizontalScale(13),
    borderRadius: radii.md,
    backgroundColor: colors.searchField,
    borderWidth: 0.2,
    borderColor: colors.searchFieldBorder,
  },
  input: {
    flex: 1,
    fontFamily: fonts.regular,
    fontSize: moderateScale(15.5),
    lineHeight: moderateScale(18),
    letterSpacing: 0.07,
    color: colors.text,
  },
});
