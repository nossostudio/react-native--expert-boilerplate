import React from 'react';
import { View, StyleSheet, LayoutAnimation } from 'react-native';
import Header from 'components/Header';

export default class FirstScreen extends React.Component {
    interval = null
    state = {
        currentProductionTime: 0,
        currentRestingTime: 0,
        currentItem: {
        }
    }

    methods = {
        newItem: () => {
            clearInterval(this.interval)
            this.interval = setInterval(() => this.setState({
                currentProductionTime: this.state.currentProductionTime + 1
            }), 1000)
            LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
            this.setState({
                currentItem: {
                    isRunning: true
                }
            })
        },
        pause: () => {
            clearInterval(this.interval)
            this.interval = setInterval(() => this.setState({
                currentRestingTime: this.state.currentRestingTime + 1
            }), 1000)
            LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
            this.setState({
                currentItem: {
                    ...this.state.currentItem,
                    isRunning: false
                }
            })
        },
        play: () => {
            clearInterval(this.interval)
            this.interval = setInterval(() => this.setState({
                currentProductionTime: this.state.currentProductionTime + 1
            }), 1000)
            LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
            this.setState({
                currentItem: {
                    ...this.state.currentItem,
                    isRunning: true
                }
            })
        },
        stop: () => {
            clearInterval(this.interval)
            this.setState({
                currentProductionTime: 0,
                currentRestingTime: 0
            })
            LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
            this.setState({ currentItem: {} })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header item={this.state.currentItem}
                    methods={this.methods}
                    currentProductionTime={this.state.currentProductionTime}
                    currentRestingTime={this.state.currentRestingTime}
                />
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