import React, { Component } from 'react';
import { Text, Button, View, StyleSheet} from 'react-native';


class RatingCounter extends Component {
   state = {   count: this.props.rating,
            editMode: false              }


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

   enterEditMode = () => {
     this.setState({
       editMode: true
     });
     console.log('enterEditMode');
     console.log(this.state.editMode);
   }

   leaveEditMode = () => {
     this.setState({
       editMode: false
     });
     console.log('leaveEditMode');
     console.log(this.state.editMode);
   }

   // <Button onPress={this.increment} title="+"></Button>
   // <Button onPress={this.decrement} title="-"></Button>


   render() {
      return (
             <View style = {styles.item}>
                <Button onPress={this.enterEditMode} title="Edit"></Button>
                <Text style={styles.text}>{this.state.count}</Text>
             </View>
      );
   }
}

// render() {
//    const editButton = <View><Text>Rating: {this.props.rating}</Text><Button onPress={() => this.enterEditMode()} title="edit" /></View>;
//    const editMode = <View><View style = {styles.editMode}><Icon type='font-awesome' name='minus-square' onPress={() => this.decreaseRating()} /><Text>Rating: {(this.state.newRating == 0) ? this.props.rating : (parseInt(this.props.rating) + parseInt(this.state.newRating))}</Text><Icon type='font-awesome' name='plus-square' onPress={() => this.increaseRating()} /></View><View><View style={styles.editMode}><Button onPress={() => this.leaveEditMode()} title="cancel" /><Button onPress={() => this.saveRating()}title="save" /></View></View></View>;
//
//    return (
//           <View style = {styles.item}>
//              {this.state.editMode ? editMode : editButton}
//           </View>
//    )
// }
// }

const styles = StyleSheet.create ({
   item: {
      paddingHorizontal: 50,
   },
   text:{
     textAlign: 'center',
   }
})


export default RatingCounter;
