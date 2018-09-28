import axios from 'axios';


export function getNames() {
  console.log('In getNames');
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
  console.log('In getRecord');

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
