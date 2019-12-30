import React from 'react';
import Result from './Result';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ResultListStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReturnButton = styled.button`
  margin: 1rem 1rem 0 0;
`;

class ResultList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let renderedList;
    const { itineraries } = this.props;

    if (Object.keys(itineraries).length > 0 && itineraries.constructor === Object) {
      renderedList = Object.keys(itineraries).map(id => {
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
      });
    } else {
      renderedList = <div>
        <h3>Loading...</h3>
      </div>;
    }
    return (
      <ResultListStyles>
        <ReturnButton>Return to form</ReturnButton>
        <h3> Results:</h3>
        {renderedList}
      </ResultListStyles >
    );
  }

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
