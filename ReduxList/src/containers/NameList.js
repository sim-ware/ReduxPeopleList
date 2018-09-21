import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import ListItem from '../components/ListItem'
import { getNames } from '../actions/index';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';


class NameList extends Component {

   componentDidMount() {
     this.props.getNames();
   }

   render() {
      if (!this.props.names) {
        return <View><Text>Loading API Data...</Text></View>
      }
      return (
        <View style = {styles.item}>
          <FlatList
            data={this.props.names}
            renderItem={({item}) => <ListItem navigation={this.props.navigation} name={String(item)} />}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getNames: getNames }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (NameList);
