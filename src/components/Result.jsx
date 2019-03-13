import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Time = styled.p`
  font-size: 12px;
  margin-top: -0.75rem;
  color: tomato;
`;
function Result({ mode, direction, distance, routeLongName, routeShortName, legStartTime, legFromTime, legToStopId, legFromName}){

  distance = Math.round((distance * 0.00062137) * 100) / 100;
  let routeData;
  if(routeLongName && routeShortName !== undefined){
    routeData =  `${routeShortName} to ${routeLongName}`;
  }
  return (
    <div>
      <p>{mode} to {direction} from {legFromName}</p>
      <Time>{distance} miles</Time>
      <p>{routeData}</p>
    </div>
  );
}

Result.propTypes = {
  mode: PropTypes.string,
  direction: PropTypes.string,
  distance: PropTypes.number,
  routeLongName: PropTypes.string,
  routeShortName: PropTypes.string,
  legStartTime: PropTypes.number,
  legFromTime: PropTypes.string,
  legToStopId: PropTypes.string,
};

export default Result;
