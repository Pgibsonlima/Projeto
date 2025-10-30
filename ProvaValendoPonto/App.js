import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TrabalhoValendoPonto from './src/components/ProvaValendoPonto';


export default function App() {
  return (
    <View style={styles.container}>
      <TrabalhoValendoPonto/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
