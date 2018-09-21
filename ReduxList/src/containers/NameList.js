import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import ListItem from '../components/ListItem'
import { getNames } from '../actions/index';
// import * as actions from '../actions/index';
import { bindActionCreators } from 'redux';


class NameList extends Component {

   componentDidMount() {
     console.log('componentDidMount');
     console.log(this.props);
     this.props.getNames();
     // getNames()

   }

   render() {
      if (!this.props.names) {
        return <View><Text>Loading API Data.</Text></View>
      }
      return (
        <View style = {styles.item}>
          <FlatList
            data={this.props.names}
            renderItem={({item}) => <ListItem name={String(item)} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )
   }
}

const styles = StyleSheet.create ({
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
   }
})

function mapStateToProps(state) {
  return {
    names: state.names
  };
}

// TODO: Feel like it's failing where the ActionCreator passes created Actions to
// Reducer -- at mapDispatchToProps -- maybe import all actions as * and pass them
// instead of passing mapDispatchToProps

function mapDispatchToProps(dispatch) {
  // this function actually makes sure that the ActionCreator passes its Action
  // onto all Reducers
  // So whenever selectBook is called, the result should be passed on to all
  // of our Reducers
  console.log(getNames);
  return bindActionCreators({ getNames: getNames }, dispatch)
  // dispatch function receives all our Actions, and pipes them through to all
  // Reducers
}

// export default connect(mapStateToProps)(NameList);
export default connect(mapStateToProps, mapDispatchToProps)(NameList);
