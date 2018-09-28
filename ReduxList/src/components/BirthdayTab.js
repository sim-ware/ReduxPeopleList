import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Card } from 'react-native-elements';


class BirthdayTab extends Component {

   render() {
      return (
             <View style = {styles.item}>
                <Text>{this.props.birthday}</Text>
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


export default BirthdayTab;
