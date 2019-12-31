import React from 'react';
import styled from 'styled-components';
import { StaticMap } from 'react-map-gl';
import { connect } from 'react-redux';
import DeckGL, { GeoJsonLayer } from 'deck.gl';
import v4 from 'uuid/v4';
import 'mapbox-gl/dist/mapbox-gl.css';

const width = '100%';
const height = '90vh';

const MapStyles = styled.div`
  position: relative;
`;

const initalViewport = {
  latitude: 45.5122,
  longitude: -122.6587,
  zoom: 10,
  bearing: 0,
  pitch: 0,
  width: '100%',
  height: '100vh',
};

const modeColors = {
  BICYCLE: [255, 165, 71],
  WALK: [52, 187, 98],
  TRAM: [255, 100, 71],
  BUS: [49, 132, 159],
};

const MapContainer = ({ data }) => {

  const renderLayers = () => {
    if (Object.keys(data).length) {
      return Object.keys(data).map(id => {
        const route = data[id].geojson;
        return [
          new GeoJsonLayer({
            id: 'geojson',
            data: route,
            stroked: false,
            filled: true,
            lineWidthMinPixels: 0.5,
            parameters: {
              depthTest: false
            },
            getLineColor: f => modeColors[f.properties.mode],
            getLineWidth: () => 50,
            pickable: true,
          })
        ];
      });
    }
  };


  return (
    <MapStyles>
      <DeckGL width={width} height={height} initialViewState={initalViewport} layers={renderLayers()} controller={true}>
        <StaticMap
          key={v4()}
          reuseMaps
          preventStyleDiffing={true}
          mapStyle='mapbox://styles/mapbox/light-v9'
          mapboxApiAccessToken={process.env.API_KEY}
        />
      </DeckGL>
    </MapStyles >
  );
};

const mapStateToProps = state => {
  return {
    data: state.geojsonById,
    itineraries: state.itinerariesById
  };
};

export default connect(mapStateToProps)(MapContainer);
