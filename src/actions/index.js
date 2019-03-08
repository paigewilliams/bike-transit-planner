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

export function concatCoords(coords){
  console.log(coords);
}

export function fetchCoords(address) {
 fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key='+process.env.GOOGLE_MAPS_API).then((response) => response.json(),
    error => console.log('an error occured', error))
    .then((json) => {
      const formattedCoords = json.results[0].geometry.location;
      return formattedCoords;
    });
}

export function formatAddress(address, regex){
  return address.replace(/\s/g, regex);
}

export function processUserInputForAPICall(toPlace, fromPlace, departOrArrive, date, distance) {
  const distanceAsMeters = Math.round(parseInt(distance) * 1609);
  const formattedToPlaceForCoords = formatAddress(toPlace, '+');
  const formattedFromPlaceForCoords = formatAddress(fromPlace, '+');
  const formattedToPlaceForTrimet = formatAddress(toPlace, '%');
  const formattedFromPlaceForTrimet = formatAddress(fromPlace, '%');
  let polishedToCoords = fetchCoords(formattedToPlaceForCoords);
  let polishedFromCoords = fetchCoords(formattedFromPlaceForCoords);
  concatCoords(polishedToCoords);
  concatCoords(polishedFromCoords);
}
// export function fetchRoute(toPlace, fromPlace, departOrArrive, date, distance) {
//


// return fetch('http://ride.trimet.org/prod?triangleTimeFactor=0&triangleSlopeFactor=0&triangleSafetyFactor=1&maxTransfers=3&_dc=1552071236583&from=&to=&arriveBy=false&time=10%3A52am&ui_date=3%2F8%2F2019&mode=TRANSIT%2CBICYCLE&optimize=TRIANGLE&maxWalkDistance='+distanceAsMeters+'&date=2019-03-08&toPlace=1208%20E%20HISTORIC%20COLUMBIA%20RIVER%20HWY%3A%3A45.538528%2C-122.376423&fromPlace=2023%20NE%2012TH%20AVE%3A%3A45.537078%2C-122.65352').then(
//   response => response.json(),
//   error => console.log('an error occured', error))
//   .then(json => {
//     console.log(json);
//     // dataAsJson = JSON.parse(convert.xml2json(str));
//     // console.log(dataAsJson);
//   })
// .then(() => {
//   let parsedData = dataAsJson.elements[0].elements[1].elements[3]
//   console.log(parsedData)
// })
// }
