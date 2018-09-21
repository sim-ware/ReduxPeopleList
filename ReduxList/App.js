import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailScreen';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

const store = createStore(reducers);

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends React.Component {
  render() {
    return <Provider store={store}><RootStack /></Provider>;
  }
}
