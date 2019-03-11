import React from 'react'
import polyline from '@mapbox/polyline';
import { connect } from 'react-redux';

function MapData(props){


  if (props.itineraries !== {}) {
    Object.keys(props.itineraries).map(function(itineraryKey) {
      const itinerary = props.itineraries[itineraryKey]
      Object.keys(itinerary).map(function(key){
        const legs = itinerary[key];
        legs.forEach(function(leg){
          Object.keys(leg).map(function(key){
            const miniLeg = leg[key]
            const newLine = polyline.decode(miniLeg.legGeometry);
            console.log(newLine);
          })
        })
      })
    })
  }

  return(
    <div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    itineraries: state.itinerariesById
  }
}

export default connect(mapStateToProps)(MapData);
