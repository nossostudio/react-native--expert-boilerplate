import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './../components/Header'

export default class FirstScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});