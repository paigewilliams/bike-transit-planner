import React from 'react';
import Result from './Result';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearSearchParams, clearItinerary, clearGeojson } from '../actions';

const ResultListStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReturnButton = styled.button`
  margin: 1rem 1rem 0 0;
`;

const ResultList = ({ itineraries, dispatch, toggleForm }) => {
  const clearForm = () => {
    toggleForm(false);
    dispatch(clearSearchParams());
    dispatch(clearItinerary());
    dispatch(clearGeojson());
  };
  return (
    <ResultListStyles>
      <ReturnButton onClick={() => clearForm()}>Return to form</ReturnButton>
      {(Object.keys(itineraries).length > 0 && itineraries.constructor === Object) ?
        Object.keys(itineraries).map(id => {
          let itinerary = itineraries[id].legs;
          return itinerary.map((leg, index) => {
            return <Result
              mode={leg.legMode}
              legToName={leg.legToName}
              distance={leg.legDistance}
              routeLongName={leg.legRouteLongName}
              routeShortName={leg.legRouteShortName}
              legStartTime={leg.legStartTime}
              legFromName={leg.legFromName}
              legToStopId={leg.legToStopId}
              key={index} />;
          });
        })
        :
        <div>
          <h3>Loading...</h3>
        </div>
      }
    </ResultListStyles>
  );
};

const mapStateToProps = state => {
  return {
    itineraries: state.itinerariesById
  };
};

ResultList.propTypes = {
  itineraries: PropTypes.object,
  dispatch: PropTypes.func,
  toggleForm: PropTypes.func
};

export default connect(mapStateToProps)(ResultList);
