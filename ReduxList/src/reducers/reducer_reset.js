// Take 2 arguments, State and Action.
// They're only ever called when an Action occurs.
// State Argument is not application state, only the state this reducer is
// responsible for.
export default function resetState(state=null, action) {
  console.log('in reducer resetState');
  console.log(action);
  switch(action.type) {
  case 'RESET_STATE':
    console.log(state);
    return state;
  }
  console.log(state);
  return state;
}
