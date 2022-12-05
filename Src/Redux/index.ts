import {combineReducers} from 'redux';
import TODO from './todos/reducer';

const rootReducer = combineReducers({
  TODO,
});
export default rootReducer;
