import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from 'components/Header';

export default class FirstScreen extends React.Component {

    state = {
        currentItem: {
        }
    }

    methods = {
        newItem: () => this.setState({
            currentItem: {
                isRunning: true
            }
        }),
        pause: () => this.setState({
            currentItem: {
                ...this.state.currentItem,
                isRunning: false
            }
        }),
        play: () => this.setState({
            currentItem: {
                ...this.state.currentItem,
                isRunning: true
            }
        }),
        stop: () => this.setState({ currentItem: {} })
    }

    render() {
        return (
            <View style={styles.container}>
                <Header item={this.state.currentItem} methods={this.methods} />
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