import React, { Component } from 'react';
import { Button, View, StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';


const ListItem = ({name, navigation}) => {
  return (
         <View style = {styles.item}>
            <Button
              title={name}
              onPress={() => {navigation.navigate('Details', {otherParam: name});}}
            />
         </View>
       );
}

const styles = StyleSheet.create ({
   item: {
      paddingHorizontal: 50,
      margin: 2,
   }
})

export default withNavigation(ListItem);
