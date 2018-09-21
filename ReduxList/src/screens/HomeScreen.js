import React from 'react';
import { View, Text, Button } from 'react-native';
import NameList from '../containers/NameList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

const store = createStore(reducers);

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'People',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Changes you make will automatically reload.</Text>
        <NameList />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
