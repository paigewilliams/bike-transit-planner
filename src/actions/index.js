import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';
import convert from 'xml-js';

export const addSearchParams = ({toPlace, fromPlace, departOrArrive, date, distance, time}) => ({
  type: types.ADD_SEARCH_PARAMS,
  toPlace: toPlace,
  fromPlace: fromPlace,
  departOrArrive: departOrArrive,
  date: date,
  distance: distance,
  time: time,
  id: v4()
});

export function fetchCoords({ distance, toPlaceForCoords, fromPlaceForCoords, toPlaceForTrimet, fromPlaceForTrimet, departOrArrive, time, date }) {
  const placesForCoords = [toPlaceForCoords, fromPlaceForCoords];
  let cleanCoords;
  let outputCoords = placesForCoords.map(coords => {
     fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+coords+'&key='+process.env.GOOGLE_MAPS_API)
    .then((response) => response.json(),
    error => console.log('an error occured', error))
    .then((json) => {
      console.log(json)
      // return json.results[0].geometry.location;
    });
  });
  fetchRoute({ distance, outputCoords, toPlaceForTrimet, fromPlaceForTrimet, departOrArrive, time, date })
}

function formatAddress(address, regex){
  return address.toUpperCase().replace(/\s/g, regex);
}

export function processUserInputForAPICall({toPlace, fromPlace, departOrArrive, date, distance, time}) {
  const distanceAsMeters = Math.round(parseInt(distance) * 1609);
  const formattedToPlaceForCoords = formatAddress(toPlace, '+');
  const formattedFromPlaceForCoords = formatAddress(fromPlace, '+');
  const formattedToPlaceForTrimet = formatAddress(toPlace, '20%');
  const formattedFromPlaceForTrimet = formatAddress(fromPlace, '20%');
  const formattedTime = militaryToStandardTime(time);
  const data = {
    distance: distanceAsMeters,
    toPlaceForCoords: formattedToPlaceForCoords,
    fromPlaceForCoords: formattedFromPlaceForCoords,
    toPlaceForTrimet: formattedToPlaceForTrimet,
    fromPlaceForTrimet: formattedFromPlaceForTrimet,
    departOrArrive: departOrArrive,
    time: formattedTime,
    date: date
  }
  fetchCoords(data);
}

function militaryToStandardTime(time){
  time = time.split(':');
  return (time[0].charAt(0) == 1 && time[0].charAt(1) > 2) ? (time[0] - 12) + '%3A' + time[1] + 'pm' : time.join('%3A') + 'am'
}
export function fetchRoute(data) {
  
  const { departOrArrive, distance, fromPlaceForTrimet, outputCoords, time, toPlaceForTrimet, date } = data;
  console.log(toPlaceForTrimet);
  // return fetch('http://ride.trimet.org/prod?triangleTimeFactor=0&triangleSlopeFactor=0&triangleSafetyFactor=1&maxTransfers=3&_dc=1552071236583&from=&to=&arriveBy='+departOrArrive+'&time='+time+'&mode=TRANSIT%2CBICYCLE&optimize=TRIANGLE&maxWalkDistance='+distance+'&date='+date+'&toPlace=1208%20E%20HISTORIC%20COLUMBIA%20RIVER%20HWY%3A%3A45.538528%2C-122.376423&fromPlace='+toPlaceForTrimet+'%3A%3A45.537078%2C-122.65352').then(
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

}
