import React, { Component } from 'react';
import { Text, Button, View, StyleSheet} from 'react-native';
import EditMode from './EditMode';
import { updateRating } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class RatingCounter extends Component {
   state = {   count: 0,
            editMode: false }


   componentDidMount() {
     this.setState({
       count: 0
     })
   }

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
       editMode: false,
       count: 0,
     });
   }

   async saveRating() {
     console.log('SaveRating');
     let yes = await this.props.updateRating(this.props.rating + this.state.count, this.props["record"]["id"]);
     this.setState({
       editMode:false,
       count:0,
     });
     // this.props.rating
     this.props.callBack();
     // Somehow set the value reading from this.props.record?
     // Can I refresh the DetailCard Record call somehow?
   }

   render() {
      console.log('this.props.rating', this.props.rating);
      console.log('this.state.count', this.state.count);
      console.log('this.props.record.rating', this.props.record.rating);
      console.log('this.props.record', this.props.record);

      const editButton = <View><Text>Rating: {(this.props.rating !== (this.props.rating+this.state.count)) && this.state.count !== 0 ? (this.props.rating+this.state.count) : this.props.rating}</Text><Button onPress={() => this.enterEditMode()} title="edit" /></View>;
      const editMode = <View style = {styles.editMode}><Text>Rating: {this.props.rating + this.state.count}</Text><Button onPress={this.increment} title="+"></Button><Button onPress={this.decrement} title="-"></Button><Button onPress={() => this.leaveEditMode()} title="cancel" /><Button onPress={() => this.saveRating()} title="save" /></View>;

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
