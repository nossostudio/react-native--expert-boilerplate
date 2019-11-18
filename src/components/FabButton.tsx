import React from 'react';
import { Entypo } from '@expo/vector-icons';
import Touchable from 'components/Touchable';
import { LinearGradient } from 'expo-linear-gradient';



export default function FabButton(props) {
    if (props.isVisible)
        return (
            <LinearGradient
                colors={['#E0B7C5', 'pink']}
                style={{
                    height: props.height,
                    width: props.width,
                    borderRadius: props.borderRadius,
                    backgroundColor: props.backgroundColor,
                    justifyContent: 'center', alignItems: 'center'
                }}>
                <Touchable
                    onPress={props.onPress}
                >
                    <Entypo name={props.iconName} size={props.iconSize} color={props.iconColor}  />
                </Touchable>
            </LinearGradient>
        )
    else
        return null;
}

FabButton.defaultProps = {
    onPress: () => alert('FabButton works.'),
    height: 89,
    width: 89,
    borderRadius: 89 / 2,
    iconName: "plus",
    iconSize: 55,
    iconColor: "white",
    backgroundColor: 'pink'
}