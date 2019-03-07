import searchParamsReducer from './../../src/reducers/search-params-reducer';

describe('searchParamsReducer', () => {

  test('should return default state if no action type is recognized', () => {
    expect(searchParamsReducer({}, { type: null })).toEqual({});
  });
});
