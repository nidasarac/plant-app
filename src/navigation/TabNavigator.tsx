import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from '@/features/home/screens/HomeScreen';

import type { TabParamList } from './types';

const Tab = createBottomTabNavigator<TabParamList>();

function DiagnoseScreen() {
  return (
    <View style={styles.stub}>
      <Text style={styles.stubText}>Diagnose</Text>
    </View>
  );
}

function ScanScreen() {
  return (
    <View style={styles.stub}>
      <Text style={styles.stubText}>Scan</Text>
    </View>
  );
}

function MyGardenScreen() {
  return (
    <View style={styles.stub}>
      <Text style={styles.stubText}>My Garden</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.stub}>
      <Text style={styles.stubText}>Profile</Text>
    </View>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Diagnose" component={DiagnoseScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="MyGarden" component={MyGardenScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  stub: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stubText: {
    fontSize: 20,
    fontWeight: '600',
  },
});
