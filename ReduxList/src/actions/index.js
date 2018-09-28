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

// Write an actionCreator
// Takes name as a Param
// Will need to get ID from Name
// And Return the Data Entry for that ID
export function getRecord(name) {
  console.log('In getRecord');
  console.log(name);
  console.log(name.charAt(0));
  const nameCode = name.charAt(0);
  console.log(nameCode.charCodeAt(0)-64);
  let iD = nameCode.charCodeAt(0)-64;
  // Pad with zero if single digit
  console.log(iD.toString().length);
  if (iD.toString().length == 1 ) {
    iD = "0" + iD.toString();
  }
  console.log(iD)
  let url = 'https://nameless-meadow-83372.herokuapp.com/people/';
  console.log(url + iD);
  return async dispatch => {
    try {
      const res = await axios (url+iD);
      dispatch({ type: 'GET_RECORD', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};
