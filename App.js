import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native';


export default function App() {

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('');
  const [allOperations, setAllOperations] = useState([]);

  const showSum = () => {
    const sum = Number(number1) + Number(number2);
    setResult(sum);
    setOperation(number1 + '+' + number2 + '=' + sum);
    setAllOperations([...allOperations, operation]);
  }

  const showRemainder = () => {
    const remainder = Number(number1) - Number(number2);
    setResult(remainder);
    setOperation(number1 + '+' + number2 + '=' + remainder);
    setAllOperations([...allOperations, operation])
  }

  const showMultiplication = () => {
    const multiplication = Number(number1) * Number(number2);
    setResult(multiplication);
    setOperation(number1 + 'x' + number2 + '=' + multiplication);
    setAllOperations([...allOperations, operation]);
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
      <View style={styles.history}>
        <FlatList
          data={allOperations}
          renderItem={({ item }) =>
            <Text>{item}</Text>}
        />
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
    marginTop: 50
  },
  flexItem: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  history: {
    flexDirection: 'row',
    padding: 10,
    margin: 20,
    paddingLeft: 25,
    width: 200,
    backgroundColor: 'pink',
  }
});
