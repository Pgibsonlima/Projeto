import { StyleSheet, Text, View } from 'react-native';
import Calculadora from './src/components/Calculadora'


export default function App() {
  return (
    <View>
     <Calculadora />
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
