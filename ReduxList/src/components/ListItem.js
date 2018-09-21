import React, { Component } from 'react';
import { Button, View, StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';


class ListItem extends Component {
   render() {
      return (
             <View style = {styles.item}>
                <Button style = {styles.button}
                  title={this.props.name}
                  onPress={() => {
                    this.props.navigation.navigate('Details', {
                      otherParam: this.props.name,
                    });
                  }}
                />
             </View>
      )
   }
}

const styles = StyleSheet.create ({
   item: {
      paddingHorizontal: 50,
      margin: 2,
   },
   button: {
      color:'black'
   }
})

// const ListItem = ({name}) => {
//   return (
//          <View style = {styles.item}>
//             <Button style = {styles.button}
//               title={name}
//               onPress={() => {this.props.navigation.navigate('Details', {otherParam: name});}}
//             />
//          </View>
//        )
// }

export default withNavigation(ListItem);
