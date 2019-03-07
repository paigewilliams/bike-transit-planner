import searchParamsReducer from './../../src/reducers/search-params-reducer';
import rootReducer from './../../src/reducers/index';
import { createStore } from 'redux';

let store = createStore(rootReducer);

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
});
