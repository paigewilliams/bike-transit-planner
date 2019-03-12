import searchParamsReducer from './../../src/reducers/search-params-reducer';
import itinerariesByIdReducer from './../../src/reducers/itineraries-by-id-reducer';
import geojsonByIdReducer from './../../src/reducers/geojson-by-id-reducer';
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

const sampleItinerary = {
  id: 0,
  legs:  {
    0: {
      legMode: 'BICYCLE',
      legToName: 'E Burnside & SE Sandy',
      legFromName: '2023 NE 12TH AVE PORTLAND',
      legToStopId: 'Trimet:13327',
      legDistance: 2039.226,
      LegStartTime: 1552290851000,
      legGeometry: 'a_}tGnwrkVbD@lC@r@?jA?N?RBvB@?k@@eB?}@?yD?QN?dA?X@^??i@Rs@Je@DKHIHEJA^?lF@N@H?HBHFDHBL@L?|A\@?nA?H?NAhA?H?ZX',
      legRouteShortName: null,
      legRouteLongName: null,
    },
    1: {
      legMode: 'BUS',
      legToName: 'SE Stark & NE Hale',
      legFromName: 'E Burnside & SE Sandy',
      legToStopId: 'TriMet:5397',
      legDistance: 19959.03391270114,
      legStartTime: 1552291320000,
      legGeometry: 'ceztG`trkV?s@?U?O@eA?kADW?M?OEa@?{@?}',
      legRouteShortName: '20',
      legRouteLongName: 'Burnside/Stark'
    }}

}

describe('rootReducer', () => {

  test('should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      searchParams: {},
      itinerariesById: {},
      geojsonById: {}
    });
  });

  test('should contain searchParamsReducer logic', () => {
    expect(store.getState().searchParams).toEqual(searchParamsReducer(undefined, { type: null }));
  });

  test('should contain itinerariesByIdReducer logic', () => {
    expect(store.getState().itinerariesById).toEqual(itinerariesByIdReducer(undefined, { type: null }));
  });

  test('should contain geojsonByIdReducer logic', () => {
    expect(store.getState(). geojsonById).toEqual(geojsonByIdReducer(undefined, { type: null}));
  })
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

describe('itinerariesByIdReducer', () => {

  test('should return default state if no action type is recognized', () => {
    expect(itinerariesByIdReducer({}, { type: null })).toEqual({});
  });

  test('should succeddfully add new itinerary with legs to itineraryById state slice', () => {

    const { id, legs } = sampleItinerary;
    action = {
      type: types.ADD_ITINERARY,
      legs: legs,
      id: id
    };
    expect(itinerariesByIdReducer({}, action)).toEqual({
      [id]:{
        legs: {
          0: {
            legMode: 'BICYCLE',
            legToName: 'E Burnside & SE Sandy',
            legFromName: '2023 NE 12TH AVE PORTLAND',
            legToStopId: 'Trimet:13327',
            legDistance: 2039.226,
            LegStartTime: 1552290851000,
            legGeometry: 'a_}tGnwrkVbD@lC@r@?jA?N?RBvB@?k@@eB?}@?yD?QN?dA?X@^??i@Rs@Je@DKHIHEJA^?lF@N@H?HBHFDHBL@L?|A\@?nA?H?NAhA?H?ZX',
            legRouteLongName: null,
            legRouteShortName: null
          },
          1: {
            legMode: 'BUS',
            legToName: 'SE Stark & NE Hale',
            legFromName: 'E Burnside & SE Sandy',
            legToStopId: 'TriMet:5397',
            legDistance: 19959.03391270114,
            legStartTime: 1552291320000,
            legGeometry: 'ceztG`trkV?s@?U?O@eA?kADW?M?OEa@?{@?}',
            legRouteShortName: '20',
            legRouteLongName: 'Burnside/Stark'
          }
        }
      }
    })
  })
})

describe('geojsonByIdReducer', () => {
  test('should return default state if no action type is recognized', () => {
    expect(geojsonByIdReducer({}, { type: null })).toEqual({});
  });
})
