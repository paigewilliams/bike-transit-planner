import React from 'react';
import styled from 'styled-components';

const MapStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: palevioletred;
`;

function Map(){
  return(
    <MapStyles>
      <h1>Map works</h1>
    </MapStyles>
  );
}

export default Map;