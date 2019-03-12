import React from 'react';
import styled from 'styled-components';
import mapboxgl from 'mapbox-gl';



mapboxgl.accessToken = process.env.API_KEY;

const MapStyles = styled.div`
  height: 100%;
  width: 100%;
`;

class Map extends React.Component {

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
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [lng, lat],
      zoom
    });
    map.on('move', () => {
      const { lng, lat } = map.getCenter();
      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });

    map.on('load', () => {
      map.addLayer({
        "id": "route",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [-122.42665, 45.50247],
                [-122.42697, 45.50254],
                [-122.42698, 45.5025],
                [-122.42662, 45.50243],
                [-122.42632, 45.5024],
                [-122.42633, 45.50244],
                [-122.42631, 45.50248],
                [-122.42632, 45.50255],
                [-122.42633, 45.50262],
                [-122.42633, 45.50268],
                [-122.42633, 45.50285],
                [-122.42635, 45.50289],
                [-122.42634, 45.50293],
                [-122.42684, 45.50293]
              ]
            }
          }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
          },
          "paint": {
          "line-color": "#888",
          "line-width": 8
          }
      });
    });
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



export default Map;
