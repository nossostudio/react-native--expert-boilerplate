import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { iOSUIKit, robotoWeights } from 'react-native-typography'
import FabButton from 'components/FabButton';

const screenHeight = Dimensions.get("window").height

/* @Xande: Aê galerinha, vamos usar componentes funcionais (não classes) quando possível */

export default function Header(props) {
    return (
        <LinearGradient
            colors={['#3E6BE0', '#2348D4']}
            style={props.styles}
        >
            {props.item.isRunning === undefined &&
                <Text style={iOSUIKit.largeTitleEmphasizedWhite}>
                    Vamos produzir, {'\n'}
                    <Text style={[iOSUIKit.largeTitleEmphasizedWhite, robotoWeights.thin]}>
                        {props.userName}
                    </Text>
                </Text>
            }
            {props.item.isRunning === true &&
                <Text style={iOSUIKit.largeTitleEmphasizedWhite}>
                    00:00:00 {'\n'}
                    <Text style={[iOSUIKit.largeTitleEmphasizedWhite, robotoWeights.thin]}>
                        Tempo rodando
                    </Text>
                </Text>
            }
            {props.item.isRunning === false &&
                <Text >
                    <Text style={[iOSUIKit.subheadWhite, { opacity: .55 }]}>
                        01:23:48 {'\n'}
                        <Text style={[iOSUIKit.subheadWhite, robotoWeights.thin]}>
                            Tempo de produção do dia até agora {'\n'}
                        </Text>
                    </Text>
                    <Text style={[iOSUIKit.largeTitleEmphasizedWhite]}>
                        00:45:01 {'\n'}
                        <Text style={[iOSUIKit.title3EmphasizedWhite, robotoWeights.thin]}>
                            Tempo de descanso rodando
                    </Text>
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
        </LinearGradient>
    )
}

function getBestHeaderHeight() {
    if (screenHeight) {
        return 377
    } else {
        return 233
    }
}

const styles = StyleSheet.create({
    container: {
        height: getBestHeaderHeight(),
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
    userName: "Thiago Silva"
}