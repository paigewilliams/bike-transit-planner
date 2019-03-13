import React from 'react';
import styled from 'styled-components';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';
import v4 from 'uuid/v4';

mapboxgl.accessToken = process.env.API_KEY;

const MapStyles = styled.div`
  height: 100%;
  width: 100%;
`;

class Map extends React.Component {
  map;
  constructor(props){
    super(props);
    this.state = {
      lat: 45.5122,
      lng: -122.6587,
      zoom: 11
    };
  }

  componentDidMount(){
    const { lat, lng, zoom } = this.state;
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [lng, lat],
      zoom
    });
    this.map.on('move', () => {
      const { lng, lat } = this.map.getCenter();
      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: this.map.getZoom().toFixed(2)
      });
    });
  }

  componentDidUpdate(){
    const { data, itineraries } = this.props;
    if(Object.keys(itineraries).length > 0 && Object.keys(data).length > 0){
      Object.keys(data, itineraries).map((id) => {
        let legs = data[id].geojson;
        let itineraryMode = itineraries[id].legs;
        let mapComponent = this.map;
        legs.forEach((leg, i) => {
          mapComponent.addLayer({
            'id': v4(),
            'type': 'line',
            'source': {
              'type': 'geojson',
              'data': {
                'type': 'Feature',
                'properties': {
                  'mode' : itineraryMode[i].legMode
                },
                'geometry': leg
              }
            },
            'layout': {
              'line-cap': 'round',
              'line-cap': 'round'
            },
            'paint': {
              'line-color': [
                'match',
                ['get', 'mode'],
                'BICYCLE', '#FFA547',
                'WALK', '#34BB62',
                'TRAM', '#FF6447',
                'BUS', '#31849F',
                '#ccc'
              ],
              'line-width': 4
            }
          });
        });
      });


    }
  }

  render(){
    const { lng, lat, zoom } = this.state;
    return(
      <div>
        <MapStyles ref={el => this.mapContainer = el}  />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.geojsonById,
    itineraries: state.itinerariesById
  }
}

export default connect(mapStateToProps)(Map);
