import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './../components/Header';
import { StyleSheet, Text, View, ScrollView, SectionList, Button, Dimensions } from 'react-native';
// import { StackedBarChart } from "react-native-chart-kit";
import { StackedBarChart, Grid, XAxis } from 'react-native-svg-charts';
var moment = require('moment');
import 'moment/locale/pt-br.js';
import { getAllMonths, getMonth, getAllDays, getDay } from '../helpers/Months';
import _ from 'lodash';

const data = [
  {
    title: 'ùltimos registros de Outubro',
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
]

const colors = ['#7b4173', '#a55194']
const keys = ['restingTime', 'productionTime']

// const chartConfig = {
//   backgroundColor: "#2398EF",
//   backgroundGradientFrom: "#2398EF",
//   backgroundGradientTo: "#2398EF",
//   decimalPlaces: 2, // optional, defaults to 2dp
//   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//   labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//   propsForDots: {
//     r: "6",
//     strokeWidth: "2",
//     stroke: "#d3eafb"
//   }
// }
// let mockValueA = Math.floor(Math.random() * 100) / 100;
// let mockValueB = Math.floor(Math.random() * 100) / 100;
// const data = {
//   labels: ["1", "2", "3", "4", "5", "6", "7"],
//   legend: ['P', 'D'],
//   data: [
//     [mockValueA, mockValueB],
//     [++mockValueA, ++mockValueB],
//     [++mockValueA, ++mockValueB],
//     [++mockValueA, ++mockValueB],
//     [++mockValueA, ++mockValueB],
//     [++mockValueA, ++mockValueB],
//     [++mockValueA, ++mockValueB]
//   ],
//   barColors: ["#118866", "#734086"]
// };
const SectionListItem = ({ date, restingTime, productionTime }) => {
  return (
    <View style={styles.SectionListItem}>
      <Text>{date}</Text>
      <Text>{productionTime}</Text>
      <Text>{restingTime}</Text>
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
        <ScrollView>
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
              xAcessor={({index}) => {console.log(index); return index}}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    borderColor: "#ccc"
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