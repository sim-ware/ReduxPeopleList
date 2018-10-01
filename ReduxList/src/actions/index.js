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
      console.log("res data", res);
      dispatch({ type: 'GET_RECORD', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};


export function updateRating(rating, id) {
  console.log('In updateRating');
  const db = myModule.db;
  return async dispatch => {
    try {
      const res = await db.collection("people").doc(String(id)).update({
        "rating": parseInt(rating)
      });
      dispatch({ type: 'GET_RECORD', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  }
}


export function resetState() {
  console.log('In resetState');
  // console.log('dispatch', dispatch);
  return async dispatch => {
    try {
      dispatch({ type: 'RESET_STATE'});
      console.log("HIT");
    } catch (error) {
      console.log(error);
    }
  };
   // dispatch({ type: 'RESET_STATE'})
};
