import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { View, StyleSheet } from 'react-native';
import Header from './../components/Header';

class FirstScreen extends React.Component {
  componentDidMount() {
    this.props['onGetTimesheet']();
  }
  render() {
    alert(JSON.stringify(this.props['items']));
    return (
      <View style={styles.container}>
        <Header />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const mapStateToProps = state => {
 return {
   items: state.items || []
 } 
}

const mapDispatchToProps = dispatch => {
  return {
    onGetTimesheet: () => dispatch(actions.getItems())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstScreen);