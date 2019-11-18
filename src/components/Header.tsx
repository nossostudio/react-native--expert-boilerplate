import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';
import { iOSUIKit, robotoWeights } from 'react-native-typography'
import FabButton from 'components/FabButton';
const TimeFormat = require('hh-mm-ss')
import { headerHeight } from '@helpers/constants'

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)
const productionTimeRunningText = "Tempo rodando";
const productionTimeSoFarText = "Tempo de produção do dia até agora";
const restingTimeRunningText = "Tempo de descanso rodando"

export default function Header(props) {
    return (
        <AnimatedLinearGradient
            colors={['#3E6BE0', '#2348D4']}
            style={[props.styles, { height: props.height }]}
        >
            {props.item.isRunning === undefined &&
                <Text style={iOSUIKit.largeTitleEmphasizedWhite}>
                    Vamos produzir, {'\n'}
                    <Text style={[iOSUIKit.largeTitleEmphasizedWhite, robotoWeights.thin]}>
                        {props.userName}
                    </Text>
                </Text>
            }
            {props.item.isRunning !== undefined &&
                <View>
                    <Text
                        style={
                            props.item.isRunning === false ?
                                [iOSUIKit.subheadWhite, { opacity: .34 }] :
                                [iOSUIKit.largeTitleEmphasizedWhite]
                        }
                    >
                        {TimeFormat.fromS(props.currentProductionTime, 'hh:mm:ss')} {'\n'}
                        <Text
                            style={
                                props.item.isRunning === false ?
                                    [iOSUIKit.subheadWhite, robotoWeights.thin] :
                                    [iOSUIKit.largeTitleEmphasizedWhite, robotoWeights.thin]
                            }
                        >
                            {
                                props.item.isRunning === true ?
                                    productionTimeRunningText : productionTimeSoFarText
                            } {'\n'}
                        </Text>
                    </Text>

                    {props.item.isRunning === false &&
                        <Text
                            style={[
                                iOSUIKit.largeTitleEmphasizedWhite,
                            ]}
                        >
                            {TimeFormat.fromS(props.currentRestingTime, 'hh:mm:ss')} {'\n'}
                            <Text style={[iOSUIKit.title3EmphasizedWhite, robotoWeights.thin]}>
                                {restingTimeRunningText}
                            </Text>
                        </Text>}
                </View>
            }
            <View style={styles.fabArea}>
                <FabButton
                    iconName="controller-stop"
                    isVisible={props.item.isRunning !== undefined}
                    onPress={props.methods.stop}
                />
                <FabButton
                    iconName={props.item.isRunning ? "controller-paus" : "controller-play"}
                    isVisible={props.item.isRunning !== undefined}
                    onPress={props.item.isRunning ? () => props.methods.pause() : () => props.methods.play()}
                />
                <FabButton
                    isVisible={props.item.isRunning === undefined}
                    onPress={props.methods.newItem}
                />
            </View>
        </AnimatedLinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: 'purple',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 34,
        borderBottomRightRadius: 34
    },
    fabArea: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: -89 / 2,
        right: 21
    }
})

Header.defaultProps = {
    styles: styles.container,
    height: headerHeight,
    userName: "Thiago Silva",
}