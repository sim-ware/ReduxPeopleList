import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { getRecord } from '../actions/index';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';


class RatingCounter extends Component {

   render() {
      return (
             <View style = {styles.item}>
                <Text>{this.props.rating}</Text>
             </View>
      );
   }
}

const styles = StyleSheet.create ({
   item: {
      paddingHorizontal: 50,
      margin: 2,
   }
})


export default RatingCounter;
