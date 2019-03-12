import React from 'react';
import Result from './Result';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ResultListStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

function ResultList({ itineraries }){
  let renderedList;
  if(itineraries === {}){
    console.log('in if')
    renderedList = <h3>Testing</h3>
  } else if (itineraries !== {}){
    console.log('in else', itineraries);
    renderedList = <h3>in else</h3>
    // renderedList =  Object.keys(itineraries).map((key) => {
    //   let itinerary = itineraries[key].legs;
    //   itinerary.map(leg => {
    //     <Result mode={leg.legMode}
    //       direction={leg.legToName}
    //       distance={leg.legDistance}
    //       routeLongName={leg.legRouteLongName}
    //       routeShortName={leg.legRouteShortName}
    //       legStartTime={leg.legStartTime}
    //       legFromName={leg.legFromName}
    //       legToStopId={leg.legToStopId} />;
    //   });
    // });
  }




  return (
    <ResultListStyles>
      <h3>Results:</h3>
      {renderedList}
    </ResultListStyles>
  );
}

const mapStateToProps = state => {
  return {
    itineraries: state.itinerariesById
  };
};

ResultList.propTypes = {
  itineraries: PropTypes.object
};

export default connect(mapStateToProps)(ResultList);
