import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailScreen';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/reducers';
import thunk from 'redux-thunk';
import { HeaderBackButton } from 'react-navigation';


// const store = createStore(rootReducer, applyMiddleware(thunk));

//
let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
let store = createStoreWithMiddleware( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//

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
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
