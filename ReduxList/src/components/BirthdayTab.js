import React, { Component } from 'react';
import { Text, Button, View, StyleSheet} from 'react-native';
import { Card } from 'react-native-elements';


const BirthdayTab = ({birthday}) => {
  return (
         <View style = {styles.item}>
            <Text>{birthday}</Text>
         </View>
       );
}

const styles = StyleSheet.create ({
   item: {
      paddingHorizontal: 50,
      margin: 2,
   }
})


export default BirthdayTab;
