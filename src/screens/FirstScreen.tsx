import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getFirstSevenItems } from '../selectors';
import { InteractionManager, StyleSheet, Text, View, SectionList, FlatList, LayoutAnimation } from 'react-native';
import { iOSUIKit } from 'react-native-typography'
import { headerHeight, minHeaderHeight, colors, strings } from 'helpers/constants';
import Animated from 'react-native-reanimated';
const AnimatedSectionList = React.memo(Animated.createAnimatedComponent(SectionList))
import { Touchable } from 'components'

class FirstScreen extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    methods = {
        newItem: () => requestAnimationFrame(() => { //Runs following block immediately 
            this.props.addItem({/* your item to be updated */ });
            InteractionManager.runAfterInteractions(() => { //Runs following block after all animations/interactions
                /** Expensive calculations - setState every second withing a setInterval, for instance */
            });
        }),
    }

    componentWillUpdate(nextProps, nextState) {
        LayoutAnimation.spring(); //Automates some animations in every state or props change. It runs in the UI Thread (good performance)
    }

    render() {
        return (
            <View style={[styles.container, { backgroundColor: colors.backgroundColor }]}>
                <Touchable>
                    <Text>{strings.hello}</Text>
                </Touchable>
            </View>
        )
    }
}

const mapStoreToProps = store => {
    return {
        currentItem: store.currentItemReducer,
        lastSevenItems: getFirstSevenItems(store), //selector, it prevents recalculating - see more in ../selectors
    }
}
const mapActionsToProps = dispatch => {
    return { //You'll have access to these functions from your FirstScreen props 
        addItem: (item) => dispatch(actions.addItem(item)) // Use it as this.props.addItem(item), for instance
    }
}
export default connect(
    mapStoreToProps,
    mapActionsToProps
)(FirstScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
