import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getLastSevenItems, getSections } from '../selectors';
import { InteractionManager, StyleSheet, Text, View, SectionList, FlatList, LayoutAnimation } from 'react-native';
import { iOSUIKit } from 'react-native-typography'
import { headerHeight, minHeaderHeight, hhmm, colors } from 'helpers/constants';
import Animated from 'react-native-reanimated';
const AnimatedSectionList = React.memo(Animated.createAnimatedComponent(SectionList))
import { Header, TimeShiftItem, TimeShiftGraph } from 'components'

class FirstScreen extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            currentItem: {
                productionTime: 0,
                restingTime: 0,
                isRunning: undefined
            }
        }

        this.renderSectionHeader = this.renderSectionHeader.bind(this)
        this.renderSectionHeaderInternal = this.renderSectionHeaderInternal.bind(this)
        this.renderItem = this.renderItem.bind(this)
        this.renderItemInternal = this.renderItemInternal.bind(this)
    }


    interval = null
    scrollY = new Animated.Value(0);
    animatedHeaderHeight = Animated.interpolate(this.scrollY, {
        inputRange: [100, headerHeight],
        outputRange: [headerHeight, minHeaderHeight],
        extrapolate: 'clamp'
    })
    methods = {
        newItem: () => requestAnimationFrame(() => {
            this.props.dispatchCurrentItem({ isRunning: true }, this.handleBackgroundTime.bind(this));
            this.setState({ currentItem: { ...this.state.currentItem, isRunning: true } })
            InteractionManager.runAfterInteractions(() => {
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
            });
        }),
        pause: () => requestAnimationFrame(() => {
            this.props.dispatchCurrentItem({ isRunning: false });
            this.setState({ currentItem: { ...this.state.currentItem, isRunning: false } })
            InteractionManager.runAfterInteractions(() => {
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
            })
        }),
        play: () => requestAnimationFrame(() => {
            this.props.dispatchCurrentItem({ isRunning: true });
            this.setState({ currentItem: { ...this.state.currentItem, isRunning: true } })
            InteractionManager.runAfterInteractions(() => {
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
            })
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

    renderSectionHeader({ section: { key } }) {
        return <Header
            height={this.animatedHeaderHeight}
            item={this.state.currentItem}
            __item={this.props.currentItem}
            methods={this.methods}
        />
    }

    renderSectionHeaderInternal({ section: { title } }) {
        if (title === this.props.sections[0].title)
            return (//Gráfico
                <View>
                    <Text style={[iOSUIKit.largeTitleEmphasized, styles.title, { color: colors.sectionList.title, fontSize: 27 }]}>Últimos 7 dias</Text>
                    <TimeShiftGraph lastSeven={this.props.lastSeven} />
                    <Text style={[iOSUIKit.largeTitleEmphasized, styles.title, { color: colors.sectionList.title, fontSize: 27 }]}>{title}</Text>
                </View>)
        else
            return <Text style={[iOSUIKit.largeTitleEmphasized, styles.title, { color: colors.sectionList.title, fontSize: 27 }]}>{title}</Text>
    }

    renderItem() {
        return <AnimatedSectionList
            style={{ flex: 1 }}
            sections={this.props.sections}
            keyExtractor={(item, _) => item.day}
            renderSectionHeader={this.renderSectionHeaderInternal}
            renderItem={this.renderItemInternal}
        />
    }

    renderItemInternal({ item }) {
        return <TimeShiftItem day={item.day} restingTime={item.restingTime} productionTime={item.productionTime} />
    }



    render() {
        return (
            <View style={[styles.container, { backgroundColor: colors.backgroundColor }]}>
                <AnimatedSectionList
                    style={{ flex: 1 }}
                    sections={[{ key: "0", data: [""] }]}
                    stickySectionHeadersEnabled={true}
                    keyExtractor={(_, index) => index}
                    delayPressIn={0}
                    disableScrollViewPanResponder
                    renderSectionHeader={this.renderSectionHeader}
                    renderItem={this.renderItem}
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
        sections: getSections(store)
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
