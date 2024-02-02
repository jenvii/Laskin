import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native';


export default function Calculator({ navigation }) {

    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState('');
    const [operation, setOperation] = useState('');
    const [allOperations, setAllOperations] = useState([]);

    const showSum = () => {
        const sum = Number(number1) + Number(number2);
        setResult(sum);
        const newOperation = `${number1} + ${number2} = ${sum}`
        setOperation(newOperation);
        setAllOperations(allOperations => [...allOperations, newOperation]);
    }

    const showRemainder = () => {
        const remainder = Number(number1) - Number(number2);
        setResult(remainder);
        const newOperation = `${number1} + ${number2} = ${remainder}`
        setOperation(newOperation);
        setAllOperations(allOperations => [...allOperations, newOperation]);
    }

    const showMultiplication = () => {
        const multiplication = Number(number1) * Number(number2);
        setResult(multiplication);
        const newOperation = `${number1} + ${number2} = ${multiplication}`
        setOperation(newOperation);
        setAllOperations(allOperations => [...allOperations, newOperation]);
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
                <Button title='History' onPress={() => navigation.navigate('History', { allOperations: allOperations })} />
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
