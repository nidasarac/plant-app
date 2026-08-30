import { Button, StyleSheet, Text, View } from 'react-native';

type PaywallScreenProps = {
  onClose: () => void;
};

export default function PaywallScreen({ onClose }: PaywallScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paywall</Text>
      <Button title="Close (X)" onPress={onClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
});
