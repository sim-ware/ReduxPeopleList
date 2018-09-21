import axios from 'axios';


export function getNames() {
  console.log('In getNames');
  // return (dispatch, getState) => {
  //   // perform API call
  //   axios.get('https://nameless-meadow-83372.herokuapp.com/people/')
  //     .then(response => {
  //       // now that you have the response, you can dispatch the action
  //       console.log(response.data);
  //       dispatch({
  //         type: GET_NAMES,
  //         payload: response.data
  //       });
  //     });
  // };
  return async dispatch => {
    // dispatch({ type: 'GET_NAMES' });
    try {
      const res = await axios ('https://nameless-meadow-83372.herokuapp.com/people/');
      dispatch({ type: 'GET_NAMES', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const fetchAllCandidates = () => {
//    return async dispatch => {
//       dispatch({ type: FETCHING_CANDIDATES });
//       try {
//          const res = await axios ('https://quiet-depths-97179.herokuapp.com/api/candidates');
//          dispatch({ type: CANDIDATES_FETCH_SUCCESS, payload: res.data.candidateNames });
//       } catch (error) {
//          console.log(error);
//       }
//    };
// };
