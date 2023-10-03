import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <ScrollView>

            <Text style={styles.title}>Qui sommes-nous? </Text>
            <Text style={styles.text}>
                Todekaviwo, la voix de ton créateur.
            </Text>
     
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 18,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign:'center',
        color: 'black',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        textAlign: 'justify',
        marginTop: 5,
        color: 'black',
    },
    list: {
        fontSize: 18,
        textAlign: 'justify',

    },
});
