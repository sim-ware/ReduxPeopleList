import React from 'react';
import { View, Text, Button } from 'react-native';
import NameList from '../NameList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


function reducer() {
  // just gonna leave this blank for now
  // which is the same as `return undefined;`
  return {
    data: [1,2,3,4,5,42]
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
