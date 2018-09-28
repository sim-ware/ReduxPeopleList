import React from 'react';
import { View, Text } from 'react-native';
import DetailCard from '../containers/DetailCard';


export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail View',
  };
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <DetailCard name={otherParam} />
      </View>
    );
  }
}
