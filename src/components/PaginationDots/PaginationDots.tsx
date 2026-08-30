import { StyleSheet, View } from 'react-native';

import { moderateScale } from '@/constants/layout';
import { colors } from '@/constants/theme';

type PaginationDotsProps = {
  count: number;
  activeIndex: number;
};

export default function PaginationDots({ count, activeIndex }: PaginationDotsProps) {
  return (
    <View style={styles.row}>
      {Array.from({ length: count }).map((_, index) => (
        <View
          key={index}
          style={index === activeIndex ? styles.active : styles.inactive}
        />
      ))}
    </View>
  );
}

const ACTIVE_SIZE = moderateScale(10);
const INACTIVE_SIZE = moderateScale(6);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: moderateScale(8),
  },
  active: {
    width: ACTIVE_SIZE,
    height: ACTIVE_SIZE,
    borderRadius: ACTIVE_SIZE / 2,
    backgroundColor: colors.dotActive,
  },
  inactive: {
    width: INACTIVE_SIZE,
    height: INACTIVE_SIZE,
    borderRadius: INACTIVE_SIZE / 2,
    backgroundColor: colors.dotInactive,
  },
});
