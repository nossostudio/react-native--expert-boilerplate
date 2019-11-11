import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './../components/Header';
import { StyleSheet, Text, View, ScrollView, SectionList, Button, Dimensions } from 'react-native';
import { BarChart } from "react-native-chart-kit";

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
    sectionListData: []
  }
  componentDidMount() {
    this.props['onGetItems']();
  }
  render() {
    console.log(this.props['items'])
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>

          <View style={styles.container}>
            <Text style={styles.title}>Visão geral</Text>
            <BarChart
              data={{
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100
                    ]
                  }
                ]
              }}
              width={Dimensions.get("window").width} // from react-native
              height={220}
              yAxisLabel={"$"}
              yAxisSuffix={"k"}
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              bezier
              style={{
                marginVertical: 8,
              }}
            />
          </View>
          <View style={styles.container}>
            <SectionList
              sections={this.state.sectionListData}
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
   items: state.items || []
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