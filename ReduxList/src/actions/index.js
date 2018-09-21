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
