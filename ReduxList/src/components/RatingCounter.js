import React, { Component } from 'react';
import { Text, Button, View, StyleSheet} from 'react-native';
import { Card } from 'react-native-elements';


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
                <Text style={styles.text}>{this.state.count}</Text>
                <Button onPress={this.decrement} title="-"></Button>
             </View>
      );
   }
}

const styles = StyleSheet.create ({
   item: {
      paddingHorizontal: 50,
   },
   text:{
     textAlign: 'center',
   }
})


export default RatingCounter;
