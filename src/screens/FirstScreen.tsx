import React from 'react';
import { StyleSheet, Text, View, ScrollView, SectionList, Button, Dimensions } from 'react-native';
import Header from './../components/Header'
import { BarChart } from "react-native-chart-kit";

export default class FirstScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={{ height: 200, width: "100%", backgroundColor: 'purple', alignSelf: 'flex-start' }}>
          <Text>Vamos Produzir, <Text>Thiago Silva</Text></Text>
          <Button title={"+"}></Button>
        </View>
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
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
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