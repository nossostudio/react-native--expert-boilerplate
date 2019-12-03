import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getLastSevenItems } from '../selectors';
import { StyleSheet, Text, View, SectionList, FlatList, LayoutAnimation } from 'react-native';
import { iOSUIKit } from 'react-native-typography'
import { getMonth } from '../helpers/Months';
import { headerHeight, minHeaderHeight, hhmm, colors } from 'helpers/constants';
import Animated from 'react-native-reanimated';
const AnimatedSectionList = Animated.createAnimatedComponent(SectionList)
import { Header, TimeShiftItem, TimeShiftGraph } from 'components'

class FirstScreen extends React.Component {
    interval = null
    state = {
        currentItem: {
            productionTime: 0,
            restingTime: 0,
            isRunning: undefined
        }
    }
    scrollY = new Animated.Value(0);
    animatedHeaderHeight = Animated.interpolate(this.scrollY, {
        inputRange: [100, headerHeight],
        outputRange: [headerHeight, minHeaderHeight],
        extrapolate: 'clamp'
    })
    methods = {
        newItem: () => requestAnimationFrame(() => {
            if (this.interval) clearInterval(this.interval)
            this.interval = setInterval(() => {
                this.setState({
                    currentItem: {
                        restingTime: this.state.currentItem.restingTime,
                        productionTime: this.state.currentItem.productionTime + 1,
                        isRunning: true
                    }
                })
            }, 1000);
            setTimeout(() => {
                this.props.dispatchCurrentItem({ isRunning: true }, this.handleBackgroundTime.bind(this));
            }, 1000)
        }),
        pause: () => requestAnimationFrame(() => {
            if (this.interval) clearInterval(this.interval);
            this.interval = setInterval(() => {
                this.setState({
                    currentItem: {
                        productionTime: this.state.currentItem.productionTime,
                        restingTime: this.state.currentItem.restingTime + 1,
                        isRunning: false
                    }
                })
            }, 1000);
            setTimeout(() => {
                this.props.dispatchCurrentItem({ isRunning: false });
            }, 1000)
        }),
        play: () => requestAnimationFrame(() => {
            if (this.interval) clearInterval(this.interval);
            this.interval = setInterval(() => {
                this.setState({
                    currentItem: {
                        restingTime: this.state.currentItem.restingTime,
                        productionTime: this.state.currentItem.productionTime + 1,
                        isRunning: true
                    }
                })
            }, 1000);
            setTimeout(() => {
                this.props.dispatchCurrentItem({ isRunning: true });
            }, 1000)
        }),
        stop: () => requestAnimationFrame(() => {
            clearInterval(this.interval);
            this.props.dispatchCurrentItem({ productionTime: this.state.currentItem.productionTime, restingTime: this.state.currentItem.restingTime, hasDoneWorkToday: true, isRunning: undefined });
            this.setState({ currentItem: { productionTime: 0, restingTime: 0, isRunning: undefined } });
        })
    }

    componentWillUpdate(nextProps, nextState) {
        LayoutAnimation.spring();
    }

    render() {
        return (
            <View style={[styles.container, { backgroundColor: colors.backgroundColor }]}>
                <AnimatedSectionList
                    style={{ flex: 1 }}
                    sections={[{ key: "", data: [""] }]}
                    ref={(r) => this.sectionList = r}
                    stickySectionHeadersEnabled={true}
                    keyExtractor={(_, index) => `_${index}`}
                    delayPressIn={0}
                    disableScrollViewPanResponder
                    renderSectionHeader={({ section: { key } }) =>
                        (<Header
                            height={this.animatedHeaderHeight}
                            item={this.state.currentItem}
                            __item={this.props.currentItem}
                            methods={this.methods}
                        />)
                    }
                    renderItem={() =>
                        (<AnimatedSectionList
                            style={{ flex: 1 }}
                            sections={this.props.sections}
                            keyExtractor={(_, index) => `${index}`}
                            renderSectionHeader={({ section: { title } }) => {
                                if (title === this.props.sections[0].title)
                                    return (//Gráfico
                                        <View>
                                            <Text style={[iOSUIKit.largeTitleEmphasized, styles.title, { color: colors.sectionList.title, fontSize: 27 }]}>Últimos 7 dias</Text>
                                            <TimeShiftGraph lastSeven={this.props.lastSeven} />
                                            <Text style={[iOSUIKit.largeTitleEmphasized, styles.title, { color: colors.sectionList.title, fontSize: 27 }]}>{title}</Text>
                                        </View>)
                                else
                                    return <Text style={[iOSUIKit.largeTitleEmphasized, styles.title, { color: colors.sectionList.title, fontSize: 27 }]}>{title}</Text>
                            }}
                            renderItem={({ item }) => (
                                <TimeShiftItem day={item.day} restingTime={item.restingTime} productionTime={item.productionTime} />
                            )}
                        />)
                    }
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        y: this.scrollY,
                                    },
                                },
                            },
                        ],
                        { useNativeDriver: true },
                    )}
                />
            </View>
        )
    }

    handleBackgroundTime(timeSpent, isRunning) {
        if (isRunning) {
            __DEV__ ? console.log('Quando entrou em backgroud, estava produzindo') : null
            this.setState((state, props) => {
                return {
                    currentItem: {
                        ...state.currentItem,
                        productionTime: state.currentItem.productionTime + timeSpent,
                    }
                }
            })
        } else {
            __DEV__ ? console.log('Quando entrou em backgroud, estava descansando') : null
            this.setState((state, props) => ({
                currentItem: {
                    ...state.currentItem,
                    restingTime: state.currentItem.restingTime + timeSpent
                }
            }))
        }
    }
}

const mapStoreToProps = store => {
    return {
        currentItem: store.currentItemReducer,
        lastSeven: getLastSevenItems(store),
        sections: store.itemsReducer.map(monthItem => ({
            title: getMonth((new Date(monthItem.month)).getMonth()),
            data: monthItem.items
        }))
    }
}
const mapDispatchToProps = dispatch => {
    return {
        dispatchCurrentItem: (item, handleBackgroundTime) => dispatch(actions.dispatchCurrentItem(item, handleBackgroundTime))
    }
}

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(FirstScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        textAlign: 'center',
        marginVertical: 8
    },
    whiteTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    }
});
