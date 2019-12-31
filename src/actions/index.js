import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';
import polyline from '@mapbox/polyline';

export const addSearchParams = ({ toPlace, fromPlace, departOrArrive, date, distance, time }) => ({
  type: types.ADD_SEARCH_PARAMS,
  toPlace: toPlace,
  fromPlace: fromPlace,
  departOrArrive: departOrArrive,
  date: date,
  distance: distance,
  time: time,
  id: v4()
});

export const clearSearchParams = () => ({ type: types.CLEAR_SEARCH_PARAMS });

export const addItineraryById = (legs, id) => ({
  type: types.ADD_ITINERARY,
  legs: legs,
  id: id
});

export const clearItinerary = () => ({ type: types.CLEAR_ITINERARY });

export const addGeojsonById = (geojson, id) => ({
  type: types.ADD_GEOJSON,
  geojson: geojson,
  id: id
});

export const clearGeojson = () => ({ type: types.CLEAR_GEOJSON });

function fetchCoords({ distance, toPlaceForCoords, fromPlaceForCoords, toPlaceForTrimet, fromPlaceForTrimet, departOrArrive, time, date }, dispatch) {
  const placesForCoords = [toPlaceForCoords, fromPlaceForCoords];
  let cleanCoords = [];
  placesForCoords.forEach(function (place) {
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + place + '&key=' + process.env.GOOGLE_KEY)
      .then((response) => response.json(),
        error => console.log('an error occured', error))
      .then((json) => {
        cleanCoords.push(json.results[0].geometry.location);
        if (cleanCoords.length === 2) {
          fetchRoute({ distance, cleanCoords, toPlaceForTrimet, fromPlaceForTrimet, departOrArrive, time, date }, dispatch);
        }
      });
  });
}

function formatAddress(address, regex) {
  return address.toUpperCase().replace(/\s/g, regex);
}

export function processUserInputForAPICall({ toPlace, fromPlace, departOrArrive, date, distance, time }, dispatch) {
  const distanceAsMeters = Math.round(parseInt(distance) * 1609);
  const formattedToPlaceForCoords = formatAddress(toPlace, '+');
  const formattedFromPlaceForCoords = formatAddress(fromPlace, '+');
  const formattedToPlaceForTrimet = formatAddress(toPlace, '%20');
  const formattedFromPlaceForTrimet = formatAddress(fromPlace, '%20');
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
  };
  fetchCoords(data, dispatch);
}

function militaryToStandardTime(time) {
  time = time.split(':');
  return (time[0].charAt(0) == 1 && time[0].charAt(1) > 2) ? (time[0] - 12) + '%3A' + time[1] + 'pm' : time.join('%3A') + 'am';
}


export function fetchRoute(data, dispatch) {
  const { departOrArrive, distance, fromPlaceForTrimet, cleanCoords, time, toPlaceForTrimet, date } = data;
  return fetch('http://ride.trimet.org/prod?triangleTimeFactor=0&triangleSlopeFactor=0&triangleSafetyFactor=1&maxTransfers=3&_dc=1552071236583&from=&to=&arriveBy=' + departOrArrive + '&time=' + time + '&mode=TRANSIT%2CBICYCLE&optimize=TRIANGLE&maxWalkDistance=' + distance + '&date=' + date + '&toPlace=' + fromPlaceForTrimet + '%3A%3A' + cleanCoords[1].lat + '%2C' + cleanCoords[1].lng + '&fromPlace=' + toPlaceForTrimet + '%3A%3A' + cleanCoords[0].lat + '%2C' + cleanCoords[0].lng + '').then(
    response => response.json(),
    error => console.log('an error occured', error))
    .then(json => {
      const itinerary = json.plan.itineraries[0].legs;
      parseRouteData(itinerary, dispatch);
    });
}

export function parseRouteData(itinerary, dispatch) {
  let newId = v4();
  const legs = itinerary.map(function (leg) {
    let legRouteLongName;
    let legRouteShortName;
    if (leg.routeShortName !== undefined && leg.routeLongName !== undefined) {
      legRouteShortName = leg.routeShortName;
      legRouteLongName = leg.routeLongName;
    } else if (leg.routeLongName !== undefined) {
      legRouteLongName = leg.routeLongName;
      legRouteShortName = null;
    } else {
      legRouteShortName = null;
      legRouteLongName = null;
    }

    const legObj = {
      legMode: leg.mode,
      legToName: leg.to.name,
      legFromName: leg.from.name,
      legToStopId: leg.to.stopCode,
      legDistance: leg.distance,
      legStartTime: leg.startTime,
      legGeometry: leg.legGeometry.points,
      legRouteShortName: legRouteShortName,
      legRouteLongName: legRouteLongName
    };
    return legObj;
  });
  createGeojson(legs, newId, dispatch);
  dispatch(addItineraryById(legs, newId));
}

function createGeojson(legs, newId, dispatch) {
  const decodedLines = legs.map((leg) => {
    return {
      type: 'Feature',
      geometry: polyline.toGeoJSON(leg.legGeometry),
      properties: { mode: leg.legMode }
    };

  });
  const featureCollection = { type: 'FeatureCollection', features: decodedLines };
  dispatch(addGeojsonById(featureCollection, newId));
}
