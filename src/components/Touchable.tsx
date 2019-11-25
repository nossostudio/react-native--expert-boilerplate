import React from 'react';
import { TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';
import * as Haptics from 'expo-haptics';

export default function Touchable(props) {
    return Platform.OS === "android" ?
        <TouchableNativeFeedback {...props} onPress={function onPress() { props.onPress(); Haptics.selectionAsync(); }} />
        :
        <TouchableOpacity {...props} onPress={function onPress() { props.onPress(); Haptics.selectionAsync(); }} />
}
