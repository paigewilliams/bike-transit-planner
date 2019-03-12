import React from 'react';
import styled from 'styled-components';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';


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
      zoom: 10
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
      const { lng, lat } = map.getCenter();
      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });


  }

  componentDidUpdate(){
    const { data } = this.props;
    if(data !== {}){
        this.map.addLayer({
          'id': 'route1',
          'type': 'line',
          'source': {
            'type': 'geojson',
            'data': {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'LineString',
                'coordinates': [
                  [-122.37823, 45.53726],
                  [-122.37813, 45.5373],
                  [-122.37805, 45.53734],
                  [-122.37802, 45.53738],
                  [-122.37801, 45.53741],
                  [-122.37802, 45.53746],
                  [-122.37806, 45.53752],
                  [-122.37804, 45.53755],
                  [-122.37803, 45.53758],
                  [-122.37805, 45.53761],
                  [-122.37787, 45.53767],
                  [-122.37776, 45.53773],
                  [-122.37783, 45.53781],
                  [-122.37784, 45.53784],
                  [-122.37786, 45.53787],
                  [-122.37796, 45.53783],
                  [-122.37799, 45.53782]
                ]
              }
            }
          },
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': '#FF0000',
            'line-width': 8
          }
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
    data: state.geojsonById
  }
}

export default connect(mapStateToProps)(Map);
