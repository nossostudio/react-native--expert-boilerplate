import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import * as Haptics from 'expo-haptics';

export default function Touchable(props) {

    return Platform.OS == "android" ?
        <TouchableNativeFeedback {...props} onPress={function onPress() { props.onPress(); Haptics.selectionAsync(); }} background={TouchableNativeFeedback.Ripple('#AAF', true)} />
        :
        <TouchableOpacity {...props} onPress={function onPress() { props.onPress(); Haptics.selectionAsync(); }} />
}

Touchable.defaultProps = {
    onPress: () => alert('DEV')
}
