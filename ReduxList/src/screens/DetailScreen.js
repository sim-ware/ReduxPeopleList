import React from 'react';
import { Button, View, Text } from 'react-native';
import DetailCard from '../containers/DetailCard';
//
import { resetState } from '../actions/index';
//
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail View',
  };

  render() {
    const { navigation } = this.props;
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <DetailCard name={otherParam} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    record: state.record
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ resetState: resetState }, dispatch)
}
