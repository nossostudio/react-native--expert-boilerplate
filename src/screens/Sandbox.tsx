import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";

export default class Sandbox extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* Add whatever you need here */}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start"
    }
});
