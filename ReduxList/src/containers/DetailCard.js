import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { getRecord } from '../actions/index';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import RatingCounter from '../components/RatingCounter';
import BirthdayTab from '../components/BirthdayTab';

class DetailCard extends Component {

  componentDidMount() {
      this.props.getRecord(this.props.name);
  }

   render() {
      if (!this.props.record) {
        return <View><Text>Loading API Data...</Text></View>
      }
      return (
             <View style = {styles.item}>
               <Card title={this.props.name}>
                <BirthdayTab birthday={this.props.record.birthday} />
                <RatingCounter rating={this.props.record.rating} />
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
    record: state.record
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getRecord: getRecord }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (DetailCard);
