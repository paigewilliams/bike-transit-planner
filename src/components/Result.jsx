import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Time = styled.p`
  font-size: 12px;
  margin-top: -0.75rem;
  color: tomato;
`;
function Result({ mode, legToName, distance, routeLongName, routeShortName, legStartTime, legToStopId, legFromName}){

  distance = Math.round((distance * 0.00062137) * 100) / 100;
  let routeData;
  let stopData
  if(routeLongName && routeShortName !== null){
    routeData =  `${routeShortName} to ${routeLongName} stop ID: ${legToStopId} `;
  } else if (routeLongName !== null){
    routeData = `${routeLongName}`;
  }


  return (
    <div>
      <p>{mode} from {legFromName} to {legToName}</p>
      <Time>{distance} miles</Time>
      <Time>{routeData}</Time>
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
