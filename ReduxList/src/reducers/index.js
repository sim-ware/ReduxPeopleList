import { combineReducers } from 'redux';
import NamesReducer from './reducer_names';
import RecordReducer from './reducer_record';
import ResetReducer from './reducer_reset';


// remember, any key declared below, ends up as a key for our Global State
const rootReducer = combineReducers({
  names: NamesReducer,
  record: RecordReducer,
  reset: ResetReducer,
});


export default rootReducer;
