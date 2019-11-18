import React from 'react';
import Header from 'components/Header';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
    LayoutAnimation,
    StyleSheet,
    Text,
    View,
    SectionList,
    Image,
} from 'react-native';
import { VictoryStack, VictoryLabel, VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
var moment = require('moment');
import 'moment/locale/pt-br.js';
import { getMonth, getDay } from '../helpers/Months';
import { headerHeight, windowWidth, hhmm, colors } from '@helpers/constants';
import Animated from 'react-native-reanimated';

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList)


const validateTime = (time) => {
    let splitted = time.split(':');
    let hour = +splitted[0].replace('h', '');
    let min = +splitted[1].replace('min', '');
    let second = +splitted[2].replace('s', '');
    let fullTime = `${hour}h:${min}min:${second}s`;
    let minutesTime = `${min}min:${second}s`;
    let secondTime = `${second}s`;
    return `${hour > 0 ? fullTime : min > 0 ? minutesTime : secondTime}`;
}
const SectionListItem = ({ date, restingTime, productionTime }) => {
    return (
        <View style={styles.SectionListItem}>
            <View>
                <Image
                    source={require('../../assets/calendar.png')}
                    fadeDuration={0}
                    style={{ width: 40, height: 40 }} />
                <Text style={{ position: 'absolute', top: 10, left: 8, fontWeight: 'bold', fontSize: 20 }}>{moment(date).format('DD')}</Text>
            </View>
            <View>
                <Text style={{ color: 'rgba(0, 0, 0, 0.55)', fontWeight: 'bold' }}>
                    {validateTime(moment(date).second(restingTime).format('HH[h]:mm[min]:ss[s]'))}
                </Text>
                <Text style={{ color: 'rgba(0, 0, 0, 0.55)', fontWeight: 'bold', fontSize: 12, textAlign: 'right' }}>de pausa</Text>
            </View>
            <View>
                <Text style={{ color: '#000', fontWeight: 'bold' }}>
                    {validateTime(moment(date).second(productionTime).format('HH[h]:mm[min]:ss[s]'))}
                </Text>
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12, textAlign: 'right' }}>de Produção</Text>
            </View>
        </View>
    )
}
class FirstScreen extends React.Component {
    constructor(props) {
        super(props);
        this.scrollY = new Animated.Value(0);
        this.animatedHeaderHeight = Animated.interpolate(this.scrollY, {
            inputRange: [100, headerHeight],
            outputRange: [headerHeight, headerHeight * 0.7],
            extrapolate: 'clamp'
        })
    }


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
            //LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
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
            //LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
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
            //LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
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
            //LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
            this.setState({ currentItem: {} })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    height={this.animatedHeaderHeight}
                    item={this.state.currentItem}
                    methods={this.methods}
                    currentProductionTime={this.state.currentProductionTime}
                    currentRestingTime={this.state.currentRestingTime}
                />
                <AnimatedSectionList
                    style={{ flex: 1, paddingTop: headerHeight + 30 }}
                    sections={this.props.sections}
                    keyExtractor={(item, index) => `${index + Math.random()}`}
                    renderSectionHeader={({ section: { title } }) => (
                        <View>
                            { /** Crianças, não façam isso em casa - esse experimento é controlado por um profisional */
                                title == "Mês de " + getMonth((new Date()).getMonth() + 1) && (<View style={{ flex: 1 }}>
                                    <Text style={styles.title}>Visão geral</Text>
                                    <View>
                                        <VictoryChart
                                            padding={{ top: 32, bottom: 32, left: 32, right: 16 }}
                                            width={windowWidth}
                                            height={headerHeight*0.7}
                                            theme={VictoryTheme.material}
                                            //animate
                                            domainPadding={{ x: [20, 16] }}
                                        >
                                            <VictoryStack>
                                                <VictoryBar
                                                    data={this.props.lastSeven} x="day" y="restingTime"
                                                    labels={({ datum }) => datum.restingTimeHHmm}
                                                    barRatio={1.1}
                                                    style={{ data: { fill: colors.chart.restingTime }, labels: { fill: colors.chart.restingTime, fontSize: 9, fontWeight: '100' } }}
                                                />
                                                <VictoryBar
                                                    data={this.props.lastSeven} x="day" y="productionTime"
                                                    labels={({ datum }) => datum.productionTimeHHmm}
                                                    barRatio={1.1}
                                                    style={{ data: { fill: colors.primary }, labels: { fill: "white", fontSize: 13, fontWeight: '100' } }}
                                                    labelComponent={
                                                        <VictoryLabel
                                                            verticalAnchor="start"
                                                            dx={32}
                                                            angle="90" />
                                                    }
                                                    cornerRadius={{ top: 5 }} />
                                            </VictoryStack>
                                        </VictoryChart>
                                    </View>
                                </View>)}
                            <Text style={styles.title}>{title}</Text>
                        </View>
                    )}
                    renderItem={({ item }) => (
                        <SectionListItem date={item.date} restingTime={item.restingTime} productionTime={item.productionTime} />
                    )}
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
                    )} />
            </View>
        )
    }
}

const mapStoreToProps = store => {
    const sections = store.itemsReducer.map(monthItem => ({
        title: "Mês de " + getMonth((new Date(monthItem.month)).getMonth()),
        data: monthItem.items
    }))

    const lastSeven = store.itemsReducer[0].items.slice(0, 7).map(item => ({
        day: getDay(moment(item.day).day()).substring(0, 3),
        productionTime: item.productionTime / 3600,
        productionTimeHHmm: hhmm(item.productionTime),
        restingTime: item.restingTime / 3600,
        restingTimeHHmm: hhmm(item.restingTime),
    }))
    return {
        lastSeven: lastSeven,
        sections: sections
    }
}

export default connect(
    mapStoreToProps,
    null
)(FirstScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    SectionListItem: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F1F1F1',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 15,
        marginVertical: 2,
        marginHorizontal: 16,
        width: windowWidth - 32
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    whiteTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    }
});
