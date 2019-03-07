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

export function fetchRoute() {

    return fetch('http://ride.trimet.org/prod?triangleTimeFactor=0&triangleSlopeFactor=0&triangleSafetyFactor=1&maxTransfers=3&_dc=1551978478825&from=&to=&arriveBy=false&time=9%3A06am&ui_date=3%2F7%2F2019&mode=TRANSIT%2CBICYCLE&optimize=TRIANGLE&maxWalkDistance=8047&date=2019-03-07&toPlace=208%20E%20HISTORIC%20COLUMBIA%20RIVER%20HWY%3A%3A45.540734%2C-122.387231&fromPlace=2023%20NE%2012TH%20AVE%3A%3A45.537078%2C-122.65352').then(
      response => response.json(),
      console.log(response),
      error => console.log('an error occured', error))
      .then(function(json) {
        console.log('api response:', json);
      });

}
