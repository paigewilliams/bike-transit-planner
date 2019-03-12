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
      const { lng, lat } = this.map.getCenter();
      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: this.map.getZoom().toFixed(2)
      });
    });
  }

  componentDidUpdate(){
    const { data } = this.props;
    if(data !== {}){
      Object.keys(data).map((id) => {
        let legs = data[id].geojson;
        let mapComponent = this.map;
        legs.forEach((leg, i) => {
          mapComponent.addLayer({
            'id': v4(),
            'type': 'line',
            'source': {
              'type': 'geojson',
              'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': leg
              }
            },
            'layout': {
              'line-cap': 'round',
              'line-cap': 'round'
            },
            'paint': {
              'line-color': '#ff6347',
              'line-width': 6
            }
          })
        })
      })
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
