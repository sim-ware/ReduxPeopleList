import React, { Component } from 'react';
import { Text, Button, View, StyleSheet} from 'react-native';
import EditMode from './EditMode';
import { updateRating } from '../actions/index';
import { connect } from 'react-redux';
// import { getRecord } from '../actions/index';
import { bindActionCreators } from 'redux';


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
   }

   leaveEditMode = () => {
     this.setState({
       editMode: false
     });
   }

   saveRating = () => {
     console.log('SaveRating');
     console.log(this.state.count);
     console.log(this.props["record"]["id"]);
     this.props.updateRating(this.state.count, this.props["record"]["id"]);
     // Call to action Here!
     // UserAction -> ActionCreator -> Action -> Reducer
   }

   render() {
      const editButton = <View><Text>Rating: {this.props.rating}</Text><Button onPress={() => this.enterEditMode()} title="edit" /></View>;
      const editMode = <View style = {styles.editMode}><Text>Rating: {this.state.count}</Text><Button onPress={this.increment} title="+"></Button><Button onPress={this.decrement} title="-"></Button><Button onPress={() => this.leaveEditMode()} title="cancel" /><Button onPress={() => this.saveRating()} title="save" /></View>;

      return (
             <View style = {styles.item}>
                {this.state.editMode ? editMode : editButton}
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

function mapStateToProps(state) {
  return {
    record: state.record
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateRating: updateRating }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (RatingCounter);

// export default RatingCounter;
