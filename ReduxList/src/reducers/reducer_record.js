// Take 2 arguments, State and Action.
// They're only ever called when an Action occurs.
// State Argument is not application state, only the state this reducer is
// responsible for.
export default function(state=null, action) {
  // console.log('In Reducer Record');
  // console.log(action);
  switch(action.type) {
  case 'GET_RECORD':
    return action.payload;
  }
  return state;
}
