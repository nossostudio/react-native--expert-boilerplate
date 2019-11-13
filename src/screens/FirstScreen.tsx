import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './../components/Header';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    SectionList,
    Image,
    Button,
    Dimensions
} from 'react-native';
// import { StackedBarChart } from "react-native-chart-kit";
import { StackedBarChart, Grid, XAxis } from 'react-native-svg-charts';
var moment = require('moment');
import 'moment/locale/pt-br.js';
import { getAllMonths, getMonth, getAllDays, getDay } from '../helpers/Months';
import _ from 'lodash';
const windowWidth = Dimensions.get("window").width

const colors = ['#7b4173', '#a55194'];
const keys = ['restingTime', 'productionTime'];

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
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Visão geral</Text>
                {/* <StackedBarChart
                    style={{ height: 200 }}
                    keys={keys}
                    colors={colors}
                    data={this.props.lastSeven}
                    showGrid={true}
                    contentInset={{ top: 16, bottom: 16 }}
                >
                    <Grid />
                </StackedBarChart>
                <XAxis
                    data={this.props.lastSeven}
                    formatLabel={(_, index) => getDay(moment(this.props.lastSeven[index].day).day()).substring(0, 2)}
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                /> */}
                <SectionList
                    style={{ flex: 1 }}
                    sections={this.props.sections}
                    keyExtractor={(item, index) => `${index + Math.random()}`}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.title}>{title}</Text>
                    )}
                    renderItem={({ item }) => (
                        <SectionListItem date={item.date} restingTime={item.restingTime} productionTime={item.productionTime} />
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

    const lastSeven = store.itemsReducer[0].items.slice(0, 6)
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
        width: windowWidth-32
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
