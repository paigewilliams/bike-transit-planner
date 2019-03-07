import searchParamsReducer from './../../src/reducers/search-params-reducer';
import rootReducer from './../../src/reducers/index';

describe('rootReducer', () => {

  test('should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      searchParams: {}
    });
  });
});


describe('searchParamsReducer', () => {

  test('should return default state if no action type is recognized', () => {
    expect(searchParamsReducer({}, { type: null })).toEqual({});
  });
});
