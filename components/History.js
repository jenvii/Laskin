import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useState } from 'react';


export default function History({ route, navigation }) {

    const { allOperations } = route.params;

    return (
        <View style={styles.history}>
            <FlatList
                data={allOperations}
                renderItem={({ item }) =>
                    <Text>{item}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    history: {
        flexDirection: 'row',
        padding: 10,
        margin: 20,
        paddingLeft: 25,
        width: 200,
        backgroundColor: 'pink',
    }
});