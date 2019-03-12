import searchParamsReducer from './search-params-reducer';
import itinerariesByIdReducer from './itineraries-by-id-reducer';
import geojsonByIdReducer from './geojson-by-id-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  searchParams: searchParamsReducer,
  itinerariesById: itinerariesByIdReducer,
  geojsonById: geojsonByIdReducer
});

export default rootReducer;
