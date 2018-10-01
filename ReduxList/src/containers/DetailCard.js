import React, { Component } from 'react';
import { Text, Button, View, StyleSheet} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { getRecord, resetState } from '../actions/index';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import RatingCounter from '../components/RatingCounter';
import BirthdayTab from '../components/BirthdayTab';

class DetailCard extends Component {

  componentWillMount() {
      this.props.getRecord(this.props.name);
  }

  reset() {
    // Can I reset the Store Here Somehow?!
    this.props.resetState()
    this.props.navigation.navigate('Home')
  }

   render() {
      if (!this.props.record) {
        return <View><Text>Loading API Data...</Text></View>
      }
      return (
             <View style = {styles.item}>
               <Card title={this.props.name}>
                <BirthdayTab birthday={this.props.record.birthday} />
                <RatingCounter rating={this.props.record.rating} id={this.props.id}/>
                <Button
                  title="Go to People List"
                  onPress={() => this.reset()}
                />
               </Card>
             </View>
      )
   }
}

const styles = StyleSheet.create ({
   item: {
      paddingHorizontal: 50,
      margin: 2,
   }
})

function mapStateToProps(state) {
  return {
    record: state.record,
    reset: state.reset
  };
}

function mapDispatchToProps(dispatch) {
  // return bindActionCreators({ getRecord: getRecord }, dispatch)
  return {
    getRecord : bindActionCreators(getRecord, dispatch),
    resetState : bindActionCreators(resetState, dispatch)
  }
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps) (DetailCard));
