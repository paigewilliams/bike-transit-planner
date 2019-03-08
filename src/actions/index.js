import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';
import convert from 'xml-js';

export const addSearchParams = (toPlace, fromPlace, departOrArrive, date, distance) => ({
  type: types.ADD_SEARCH_PARAMS,
  toPlace: toPlace,
  fromPlace: fromPlace,
  departOrArrive: departOrArrive,
  date: date,
  distance: distance,
  id: v4()
});

export function fetchRoute() {
  let dataAsJson = {};
  return fetch('http://ride.trimet.org/prod?triangleTimeFactor=0&triangleSlopeFactor=0&triangleSafetyFactor=1&maxTransfers=3&_dc=1551978478825&from=&to=&arriveBy=false&time=9%3A06am&ui_date=3%2F8%2F2019&mode=TRANSIT%2CBICYCLE&optimize=TRIANGLE&maxWalkDistance=8047&date=2019-03-07&toPlace=208%20E%20HISTORIC%20COLUMBIA%20RIVER%20HWY%3A%3A45.540734%2C-122.387231&fromPlace=2023%20NE%2012TH%20AVE%3A%3A45.537078%2C-122.65352').then(
    response => response.text(),
    error => console.log('an error occured', error))
    .then(str => {
      dataAsJson = JSON.parse(convert.xml2json(str));
      console.log(dataAsJson);
    }).then(() => {
      // let parsedData = dataAsJson.elements[0].elements[1].elements[3]
      // console.log(parsedData)
    })
}
