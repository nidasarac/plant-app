import { Ionicons } from '@expo/vector-icons';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import type { ComponentType } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import DiagnoseIcon from '@/components/icons/DiagnoseIcon';
import GardenIcon from '@/components/icons/GardenIcon';
import ScanButtonIcon from '@/components/icons/ScanButtonIcon';
import { horizontalScale, moderateScale, verticalScale } from '@/constants/layout';
import { colors, fonts } from '@/constants/theme';
import type { TabParamList } from './types';

// diagnose/garden = figma svgs, home/profile = closest ionicons
type TabIcon =
  | { set: 'ionicons'; name: keyof typeof Ionicons.glyphMap }
  | { set: 'svg'; Component: ComponentType<{ color: string; size: number }> };

const TABS: { name: keyof TabParamList; label: string; icon: TabIcon }[] = [
  { name: 'Home', label: 'Home', icon: { set: 'ionicons', name: 'albums' } },
  { name: 'Diagnose', label: 'Diagnose', icon: { set: 'svg', Component: DiagnoseIcon } },
  { name: 'MyGarden', label: 'My Garden', icon: { set: 'svg', Component: GardenIcon } },
  { name: 'Profile', label: 'Profile', icon: { set: 'ionicons', name: 'person' } },
];

function TabIconView({ icon, color }: { icon: TabIcon; color: string }) {
  const size = moderateScale(25);
  if (icon.set === 'svg') {
    return <icon.Component color={color} size={size} />;
  }
  return <Ionicons name={icon.name} size={size} color={color} />;
}

// white bar with a raised scan button in the middle
export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const activeRoute = state.routes[state.index]?.name;

  const go = (name: keyof TabParamList) => {
    if (activeRoute !== name) {
      navigation.navigate(name);
    }
  };

  const renderTab = (tab: (typeof TABS)[number]) => {
    const focused = activeRoute === tab.name;
    return (
      <Pressable key={tab.name} style={styles.tab} onPress={() => go(tab.name)}>
        <TabIconView
          icon={tab.icon}
          color={focused ? colors.primary : colors.tabIconInactive}
        />
        <Text style={[styles.label, focused ? styles.labelActive : styles.labelInactive]}>
          {tab.label}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <Pressable style={styles.scanButton} onPress={() => go('Scan')} hitSlop={8}>
        <ScanButtonIcon size={moderateScale(64)} />
      </Pressable>

      <View style={styles.row}>
        {renderTab(TABS[0])}
        {renderTab(TABS[1])}
        <View style={styles.scanSlot} />
        {renderTab(TABS[2])}
        {renderTab(TABS[3])}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.tabBar,
    borderTopWidth: 0.5,
    borderTopColor: colors.tabBarDivider,
  },
  row: {
    flexDirection: 'row',
    height: verticalScale(56),
    paddingTop: verticalScale(6),
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: verticalScale(4),
  },
  scanSlot: {
    width: horizontalScale(74),
  },
  label: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(10),
    letterSpacing: -0.24,
  },
  labelActive: {
    color: colors.primary,
  },
  labelInactive: {
    color: colors.tabLabelInactive,
  },
  scanButton: {
    position: 'absolute',
    alignSelf: 'center',
    top: verticalScale(-23),
  },
});
