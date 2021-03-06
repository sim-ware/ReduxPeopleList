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
  // constructor() {
  //   super();
  //   // this.state = {
  //   //   name: '',
  //   //   rating: 0
  //   // };
  //   this.update = this.update.bind(this);
  // }
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }

  componentWillMount() {
      this.props.getRecord(this.props.name);
  }

  reset() {
    // Can I reset the Store Here Somehow?
    this.props.resetState()
    this.props.navigation.navigate('Home')
  }

  async update() {
    console.log('---------');
    console.log('updating!');
    console.log('---------');
    // CAN I SOMEHOW GET THIS COMPONENT
    // TO RECALL RECORD AND RE-RENDER HERE?
    // let result = await this.setState({ state: this.state });
    // let result = await this.forceUpdate()
    let result = await this.componentWillMount();
    // let result = await this.props.getRecord(this.props.name);
    console.log(this.props.record.rating);
  }

   render() {
      if (!this.props.record) {
        return <View><Text>Loading API Data...</Text></View>
      }
      return (
             <View style = {styles.item}>
               <Card title={this.props.name}>
                <BirthdayTab birthday={this.props.record.birthday} />
                <RatingCounter callBack={() => this.update()} rating={this.props.record.rating} id={this.props.id}/>
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
  return {
    getRecord : bindActionCreators(getRecord, dispatch),
    resetState : bindActionCreators(resetState, dispatch)
  }
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps) (DetailCard));
