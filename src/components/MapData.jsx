import React from 'react';
import polyline from '@mapbox/polyline';
import { connect } from 'react-redux';

function MapData(props){


  if (props.itineraries !== {} ) {
    let allLines = [];
    Object.keys(props.itineraries).map(function(itineraryKey) {
      const itinerary = props.itineraries[itineraryKey];
      Object.keys(itinerary).map(function(key){
        const legs = itinerary[key];
        legs.forEach(function(leg){
          const newLine = polyline.toGeoJSON(leg.legGeometry);
          allLines.push(newLine);
        });
      });
    });
    console.log(allLines);
    // const collection = JSON.stringify({
    //   features: allLines.map(JSON.parse),
    //   type: 'FeatureCollection'
    // });
    // console.log(collection);
  }

  return(
    <div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    itineraries: state.itinerariesById
  };
};

export default connect(mapStateToProps)(MapData);
