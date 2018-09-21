import React from 'react';
import { View, Text, Button } from 'react-native';
// import DetailCard from '../src/DetailCard'


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
        <Text> {JSON.stringify(otherParam)} </Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
