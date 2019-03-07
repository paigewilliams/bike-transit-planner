import searchParamsReducer from './../../src/reducers/search-params-reducer';
import rootReducer from './../../src/reducers/index';
import { createStore } from 'redux';
import constants from './../../src/constants';
const { types } = constants;

let store = createStore(rootReducer);
let action;

const sampleSearchParams = {
  toPlace: '2023 NE 12TH AVE PORTLAND OR 97212',
  fromPlace: '208 E HISTORIC COLUMBIA RIVER HWY TROUTDALE OR 97060',
  departOrArrive: 'depart',
  date: '2019-03-07',
  distance: '8047',
  id: 0
}

describe('rootReducer', () => {

  test('should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      searchParams: {}
    });
  });

  test('should contain searchParamsReducer logic', () => {
    expect(store.getState().searchParams).toEqual(searchParamsReducer(undefined, { type: null }));
  });
});


describe('searchParamsReducer', () => {



  test('should return default state if no action type is recognized', () => {
    expect(searchParamsReducer({}, { type: null })).toEqual({});
  });

  test('should successfully add new search parameters to searchParams state slice', () => {
    const { toPlace, fromPlace, departOrArrive, date, distance, id} = sampleSearchParams;
    action = {
      type: types.ADD_SEARCH_PARAMS,
      toPlace: toPlace,
      fromPlace: fromPlace,
      departOrArrive: departOrArrive,
      date: date,
      id: id
    };
    expect(searchParamsReducer({}, action)).toEqual({
      [id] : {
        toPlace: toPlace,
        fromPlace: fromPlace,
        departOrArrive: departOrArrive,
        date: date,
        id: id
      }
    });
  });

});
