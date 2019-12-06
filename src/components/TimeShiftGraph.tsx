import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { VictoryStack, VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import { minHeaderHeight, windowWidth, colors, minSecondsToShowLabel } from 'helpers/constants';
import PropTypes from 'prop-types'

function TimeShiftGraph({ lastSeven }) {
    const [animationHasEnded, setAnimationHasEnded] = useState(false)
    return (
        <View>
            <VictoryChart
                padding={{ top: 8, bottom: 48, left: 32, right: 16 }}
                width={windowWidth}
                height={minHeaderHeight}
                theme={VictoryTheme.material}
                animate={{
                    onEnd: () => setAnimationHasEnded(true),
                    duration: 6000, easing: "bounceInOut"
                }}
                domainPadding={{ x: [20, 16] }}
                style={{ legend: { fontSize: 5 }, axis: { fill: 'pink' } }}
            >
                <VictoryAxis
                    style={{
                        grid: { stroke: "#718096", strokeDasharray: "2 10" },
                        tickLabels: { fontSize: 8 }
                    }}
                />
                <VictoryStack>
                    <VictoryBar //DOCS: https://formidable.com/open-source/victory/docs/victory-bar/
                        data={lastSeven} x="weekDayDDD" y="restingTimeH"
                        domain={{ y: [0, 12] }} //TODO: Definir domain máximo de acordo com o elemento maior de lastSeven
                        labels={({ datum }) => animationHasEnded ? ((datum.productionTime > minSecondsToShowLabel ? datum.productionTimeHHmm : "") + "\n" + (datum.productionTime > minSecondsToShowLabel ? datum.restingTimeHHmm : "")) : ""} //Hide labels if productionTime is small
                        barWidth={30}
                        style={{ data: { fill: colors.chart.restingTime }, labels: { fill: colors.chart.restingTime, fontSize: 9, fontWeight: '100' } }}
                    />
                    <VictoryBar
                        data={lastSeven} x="weekDayDDD" y="productionTimeH"
                        domain={{ y: [0, 12] }} //TODO: Definir domain máximo de acordo com o elemento maior de lastSeven
                        barWidth={30}
                        style={{ data: { fill: colors.chart.productionTime } }}
                        cornerRadius={{ top: 5 }}
                    />
                </VictoryStack>
            </VictoryChart>
        </View>
    )
}

export default React.memo(TimeShiftGraph);

TimeShiftGraph.propTypes = {
    lastSeven: PropTypes.array
}