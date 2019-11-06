import React from 'react';
import { TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';


export default function Touchable(props) {
    return Platform.OS === "android" ? <TouchableNativeFeedback {...props} /> : <TouchableOpacity {...props} />
}
