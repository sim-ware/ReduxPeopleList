import React from 'react';
import { View, Text, Button } from 'react-native';
import NameList from '../NameList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


function reducer() {
  //TODO: Find a way of calling the Firebase NameList Here
  return {
    data: ['John', 'Paul', 'Luke', 'John']
  };
}

const store = createStore(reducer);

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'People',
  };

  render() {
    return (
      <Provider store={store}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Changes you make will automatically reload.</Text>
        <NameList />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
      </Provider>
    );
  }
}
