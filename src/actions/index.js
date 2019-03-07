import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const addSearchParams = (toPlace, fromPlace, departOrArrive, date, distance) => ({
  type: types.ADD_SEARCH_PARAMS,
  toPlace: toPlace,
  fromPlace: fromPlace,
  departOrArrive: departOrArrive,
  date: date,
  distance: distance,
  id: v4()
})
