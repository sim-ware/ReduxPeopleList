import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from './ListItem'
const myModule = require('./Firebase');



export default class NameList extends Component {
   constructor() {
     super();
     this.state = {
       data: []
     };
     this.componentDidMount = this.componentDidMount.bind(this);
   }

   componentDidMount() {
    const db = myModule.db;
    db.collection('people').get().then(collection => {
      const data = collection.docs.map(doc => doc.data().name)
      this.setState({ data });
    });
   }

   render() {
      return (
        <View style = {styles.item}>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => <ListItem name={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )
   }
}

const styles = StyleSheet.create ({
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
   }
})
