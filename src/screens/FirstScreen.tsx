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

const data = [
  {
    title: 'últimos registros de Outubro',
    data: [
      {
        day: new Date(2019, 10, 11),
        restingTime: 50,
        productionTime: 19
      },
      {
        day: new Date(2019, 10, 12),
        restingTime: 50,
        productionTime: 14
      },
      {
        day: new Date(2019, 10, 15),
        restingTime: 50,
        productionTime: 60
      },
      {
        day: new Date(2019, 10, 13),
        restingTime: 50,
        productionTime: 12,
      },
      {
        day: new Date(2019, 10, 14),
        restingTime: 50,
        productionTime: 37,
      },
      {
        day: new Date(2019, 10, 15),
        restingTime: 50,
        productionTime: 55,
      },
      {
        day: new Date(2019, 10, 8),
        restingTime: 53,
        productionTime: 49,
      }
    ]
  }
];

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
      <View style={{ position: 'relative' }}>
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
  state = {
    months: getAllMonths(),
    chartData: []
  }
  constructor(props) {
    super(props);
    this.getChartData = this.getChartData.bind(this);
  }
  async componentDidMount() {
    await this.props['onGetItems']();
  }
  getChartData(items) {
    return items[0].data.map(item => getDay(moment(item.date).day()))
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView style={{ marginHorizontal: 15, marginTop: 15 }}>
          <View>
            <Text style={styles.title}>Visão geral</Text>
            <StackedBarChart
              style={{ height: 200 }}
              keys={keys}
              colors={colors}
              data={data[0].data}
              showGrid={true}
              contentInset={{ top: 30, bottom: 30 }}
            >
              <Grid />
            </StackedBarChart>
            <XAxis
              style={{ marginHorizontal: -10 }}
              data={data[0].data}
              xAcessor={({ index }) => { console.log(index); return index }}
              formatLabel={(value, index) => "day" + value}
              contentInset={{ left: 10, right: 10 }}
              svg={{ fontSize: 10, fill: 'black' }}
            />
          </View>
          <View style={styles.container}>
            <SectionList
              sections={this.props['items']}
              keyExtractor={(item, index) => item.id + index}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.title}>{title}</Text>
              )}
              renderItem={({ item }) => (
                <SectionListItem date={item.date} restingTime={item.restingTime} productionTime={item.productionTime} />
              )} />
          </View>
        </ScrollView>
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
    marginVertical: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30
  },
  whiteTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  }
});


const mapStateToProps = state => {
  return {
    items: state.itemReducer || []
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetItems: () => dispatch(actions.getItems())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstScreen);