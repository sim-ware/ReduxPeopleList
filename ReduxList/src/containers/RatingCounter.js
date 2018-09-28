import React, { Component } from 'react';
import { Text, Button, View, StyleSheet} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { getRecord } from '../actions/index';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';


class RatingCounter extends Component {
   state = { count: this.props.rating }


   increment = () => {
     this.setState({
       count: this.state.count + 1
     });
   }

   decrement = () => {
     this.setState({
       count: this.state.count - 1
     });
   }

   render() {
      return (
             <View style = {styles.item}>
                <Button onPress={this.increment} title="+"></Button>
                <Text>{this.state.count}</Text>
                <Button onPress={this.decrement} title="-"></Button>
             </View>
      );
   }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const styles = StyleSheet.create ({
   item: {
      paddingHorizontal: 50,
      margin: 2,
   }
})


export default connect(mapStateToProps)(RatingCounter);
