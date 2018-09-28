import axios from 'axios';
const myModule = require('./Firebase');

export function getNames() {
  return async dispatch => {
    try {
      const res = await axios ('https://nameless-meadow-83372.herokuapp.com/people/');
      dispatch({ type: 'GET_NAMES', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};


export function getRecord(name) {
  let iD = name.charAt(0).charCodeAt(0)-64;
  if (iD.toString().length == 1 ) {
    iD = "0" + iD.toString();
  }
  let url = 'https://nameless-meadow-83372.herokuapp.com/people/';
  return async dispatch => {
    try {
      const res = await axios (url+iD);
      dispatch({ type: 'GET_RECORD', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export function updateRating(rating, id) {
  console.log('In updateRating');
  console.log(rating);
  console.log(id);
  let nRat = parseInt(rating);
  const db = myModule.db;
  db.collection("people").doc(String(id)).update({
    "rating": nRat
  })
  // this.setState({editMode:false});
  // name = String(this.props.name);
  // let key = name.substr(0,1).toLowerCase().charCodeAt(0) - 96;
  // String(key).length == 1 ? key='0'+key : key=key
}
