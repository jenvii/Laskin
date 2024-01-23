import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';


export default function App() {

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const showSum = () => {
    const sum = Number(number1) + Number(number2);
    setResult(sum);
  }

  const showRemainder = () => {
    const remainder = Number(number1) - Number(number2);
    setResult(remainder);
  }

  // tein tämän vielä ylimääräisenä kokeiluna
  const showMultiplication = () => {
    const multiplication = Number(number1) * Number(number2);
    setResult(multiplication);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Result: {result}</Text>
        <TextInput
          keyboardType='numeric'
          style={{ width: 200, borderColor: 'pink', borderWidth: 2 }}
          onChangeText={text => setNumber1(text)} />
        <TextInput
          keyboardType='numeric'
          style={{ width: 200, borderColor: 'pink', borderWidth: 2 }}
          onChangeText={text => setNumber2(text)} />
      </View>
      <View style={styles.flexItem}>
        <Button title="+" onPress={showSum} />
        <Button title="-" onPress={showRemainder} />
        <Button title="x" onPress={showMultiplication} />
      </View>
      <StatusBar style="auto" />
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
  flexItem: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  }
});
