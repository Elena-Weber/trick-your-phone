import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from './screens/Start';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['red', 'yellow']}
      style={styles.container} >
        <StatusBar style="auto" />
        <Text>HELLO!!!</Text>
        <Start />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // occupies whole screen
    // backgroundColor: 'lightyellow',
  },
});
