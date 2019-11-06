import React from 'react';
import { StyleSheet, Text, View, ScrollView, SectionList, Button, Dimensions } from 'react-native';
import Header from './../components/Header'
import { BarChart } from "react-native-chart-kit";

let id = 0;
const sectionListData = [
  {
    title: 'Últimos registros de Outubro',
    data: [
      {
        id: ++id,
        date: '2019-08-10',
        stopTime: '01:10:10',
        runningTime: '01:10:10',
      },
      {
        id: ++id,
        date: '2019-08-10',
        stopTime: '01:10:10',
        runningTime: '02:10:10',
      },
      {
        id: ++id,
        date: '2019-08-10',
        stopTime: '01:10:10',
        runningTime: '03:10:10',
      }
    ]
  },
  {
    title: 'Últimos registros de Novembro',
    data: [
      {
        id: ++id,
        date: '2019-08-10',
        stopTime: '01:10:10',
        runningTime: '01:10:10',
      },
      {
        id: ++id,
        date: '2019-08-10',
        stopTime: '01:10:10',
        runningTime: '02:10:10',
      },
      {
        id: ++id,
        date: '2019-08-10',
        stopTime: '01:10:10',
        runningTime: '03:10:10',
      }
    ]
  }
]

const SectionListItem = ({ date, stopTime, runningTime }) => {
  return (
    <View style={styles.SectionListItem}>
      <Text>{date}</Text>
      <Text>{stopTime}</Text>
      <Text>{runningTime}</Text>
    </View>
  )
}

export default class FirstScreen extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <Header />
        <View style={{ height: 200, width: "100%", backgroundColor: 'purple', alignSelf: 'flex-start' }}>
          <Text style={styles.title}>Vamos Produzir,</Text>
          <Text style={styles.whiteTitle}>Thiago Silva</Text>
          <Button title={"+"}></Button>
        </View>
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
              sections={sectionListData}
              keyExtractor={(item, index) => item.id + index}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.title}>{title}</Text>
              )}
              renderItem={({ item }) => (
                <SectionListItem date={item.date} stopTime={item.stopTime} runningTime={item.runningTime} />
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