import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)
import { iOSUIKit, systemWeights } from 'react-native-typography'
import FabButton from 'components/FabButton';
import { headerHeight, headerStrings, hhmmss, hms } from 'helpers/constants'
const { productionTimeRunningText, productionTimeSoFarText, restingTimeRunningText } = headerStrings

function Header(props) {
    return (
        <Animated.View style={[props.styles, { height: props.height }]}
        >
            <AnimatedLinearGradient
                colors={['#3E6BE0', '#2348D4']}
                style={[styles.innerContainer, { height: Animated.multiply(props.height, 2), position: 'absolute', top: Animated.multiply(props.height, -1), overflow: 'hidden' }]}
            >
                <Text style={{ top: -200 }}>👅</Text>
            </AnimatedLinearGradient>
            <Animated.View
                style={[styles.innerContainer, { height: props.height, backgroundColor: 'transparent' }]}
            >
                {props.item.isRunning === undefined && !props.__item.hasDoneWorkToday &&
                    <Text style={iOSUIKit.largeTitleEmphasizedWhite}>
                        Vamos produzir, {'\n'}
                        <Text style={[iOSUIKit.largeTitleEmphasizedWhite, systemWeights.thin]}>
                            {props.userName} {/** default prop */}
                        </Text>
                    </Text>
                }
                {props.item.isRunning === undefined && props.__item.hasDoneWorkToday &&
                    <Text style={iOSUIKit.largeTitleEmphasizedWhite}>
                        <Text style={[iOSUIKit.largeTitleEmphasizedWhite, systemWeights.thin]}>
                            Hoje você {'\n'}produziu {'\n'}
                        </Text>
                        {handleProductionTimeFormat(props.__item.productionTime)}
                    </Text>
                }
                {props.item.isRunning !== undefined &&
                    <Text
                        style={
                            props.item.isRunning === false ?
                                [iOSUIKit.largeTitleEmphasizedWhite, { opacity: .34, fontSize: 16, margin: 0, padding: 0, lineHeight: 16 }] :
                                [iOSUIKit.largeTitleEmphasizedWhite]
                        }
                    >
                        {hhmmss(props.item.productionTime)}{'\n'}
                        <Text
                            style={
                                props.item.isRunning === false ?
                                    [iOSUIKit.largeTitleEmphasizedWhite, systemWeights.thin, { fontSize: 16, margin: 0, padding: 0, lineHeight: 16 }] :
                                    [iOSUIKit.largeTitleEmphasizedWhite, systemWeights.thin]
                            }
                        >
                            {
                                props.item.isRunning === true ?
                                    productionTimeRunningText : productionTimeSoFarText
                            }
                        </Text>
                    </Text>
                }
                {props.item.isRunning === false &&
                    <Text
                        style={[
                            iOSUIKit.largeTitleEmphasizedWhite,
                        ]}
                    >
                        {hhmmss(props.item.restingTime)} {'\n'}
                        <Text style={[iOSUIKit.title3EmphasizedWhite, systemWeights.thin]}>
                            {restingTimeRunningText}
                        </Text>
                    </Text>
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
            </Animated.View >
        </Animated.View>
    )
}

export default React.memo(Header)

function handleProductionTimeFormat(seconds) {
    const hmmssArray = hms(seconds).split(":")
    return ((parseInt(hmmssArray[0]) > 0) ? `${hmmssArray[0]}h` : "") + ((parseInt(hmmssArray[1]) > 0) ? ` ${hmmssArray[1]}min` : "") + ((parseInt(hmmssArray[2]) > 0) ? ` ${hmmssArray[2]}s` : "")
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    innerContainer: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 34,
        borderBottomRightRadius: 34,
    },
    fabArea: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: -20,
        right: 21
    }
})

Header.defaultProps = {
    styles: styles.container,
    height: headerHeight,
    userName: "Thiago Silva",
    item: {
        productionTime: 0,
        restingTime: 0,
        isRunning: undefined
    },
    __item: { //Acumulated item for the whole day, it comes from redux global store
        productionTime: 0,
        restingTime: 0,
        isRunning: undefined
    }
}