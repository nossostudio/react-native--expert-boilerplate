import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { iOSUIKit, systemWeights } from 'react-native-typography'
import { hmmss, colors, windowWidth } from 'helpers/constants';
import { Entypo, Ionicons } from '@expo/vector-icons';
import Touchable from './Touchable'

var moment = require('moment');
import 'moment/locale/pt-br.js';

function TimeShiftItem({ day, restingTime, productionTime }) {
    const restingTimeArray = hmmss(restingTime).split(":")
    const productionTimeArray = hmmss(productionTime).split(":")
    return (
        <Touchable>
            <View style={[styles.container, { backgroundColor: colors.listItem.backgroundColor }]}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons name="ios-calendar" size={70} color={colors.listItem.day} />
                    <Text style={[iOSUIKit.largeTitleEmphasizedWhite, {
                        position: 'absolute',
                        ...Platform.select({ ios: { bottom: 15, }, android: { bottom: 10, } }),
                        fontWeight: 'bold', fontSize: 23, color: colors.listItem.day
                    }]}>
                        {moment(day).format('DD')}
                    </Text>
                </View>
                <View>
                    <Text style={[iOSUIKit.title3Emphasized, { color: colors.listItem.restingTime }]}>
                        {restingTimeArray[0]}:{restingTimeArray[1]}:<Text style={{ fontSize: 15 }}>{restingTimeArray[2]}</Text>
                    </Text>
                    <Text style={[{ color: colors.listItem.restingTime, fontSize: 12, textAlign: 'right' }, systemWeights.thin]}>de pausa</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={[iOSUIKit.largeTitleEmphasizedWhite, { color: colors.listItem.productionTime }]}>
                        {productionTimeArray[0]}:{productionTimeArray[1]}:<Text style={{ fontSize: 15 }}>{productionTimeArray[2]}</Text>
                    </Text>
                    <Text style={[{ color: colors.listItem.productionTime, fontSize: 12, textAlign: 'right' }, systemWeights.thin]}>de produção</Text>
                </View>
                <View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo name="chevron-thin-right" size={18} color={colors.listItem.day} onPress={() => alert('DEV')} />
                    </View>
                </View>
            </View>
        </Touchable>
    )
}

export default TimeShiftItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: 'lightgray',
        borderBottomWidth: .8,
        padding: 16,
        width: windowWidth
    }
});
