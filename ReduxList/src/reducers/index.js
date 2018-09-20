import { combineReducers } from 'redux';
import NamesReducer from './reducer_names';


// remember, any key declared below, ends up as a key for our Global State
const rootReducer = combineReducers({
  names: NamesReducer
});

export default rootReducer;
