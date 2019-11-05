import React from 'react';
import { View, StyleSheet } from 'react-native';

/* @Xande: Aê galerinha, vamos usar componentes funcionais (não classes) quando possível */

export default function Header(props) {
    return (
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: "100%",
        backgroundColor: 'purple',
        alignSelf: 'flex-start'
    }
})