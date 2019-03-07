import searchParamsReducer from './search-params-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  searchParams: searchParamsReducer
});

export default rootReducer;
