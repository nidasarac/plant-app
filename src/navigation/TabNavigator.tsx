import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from '@/features/home/screens/HomeScreen';
import { colors, fonts } from '@/constants/theme';
import { moderateScale } from '@/constants/layout';

import CustomTabBar from './CustomTabBar';
import type { TabParamList } from './types';

const Tab = createBottomTabNavigator<TabParamList>();

// only Home is real, the rest are stubs
function Stub({ label }: { label: string }) {
  return (
    <View style={styles.stub}>
      <Text style={styles.stubText}>{label}</Text>
    </View>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Diagnose">{() => <Stub label="Diagnose" />}</Tab.Screen>
      <Tab.Screen name="Scan">{() => <Stub label="Scan" />}</Tab.Screen>
      <Tab.Screen name="MyGarden">{() => <Stub label="My Garden" />}</Tab.Screen>
      <Tab.Screen name="Profile">{() => <Stub label="Profile" />}</Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  stub: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  stubText: {
    fontFamily: fonts.medium,
    fontSize: moderateScale(20),
    color: colors.text,
  },
});
