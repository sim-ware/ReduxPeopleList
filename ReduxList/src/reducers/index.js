import { combineReducers } from 'redux';
import NamesReducer from './reducer_names';
import RecordReducer from './reducer_record';


// remember, any key declared below, ends up as a key for our Global State
const rootReducer = combineReducers({
  names: NamesReducer,
  record: RecordReducer
});

export default rootReducer;
