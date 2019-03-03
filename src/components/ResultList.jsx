import React from 'react';
import Result from './Result';
import styled from 'styled-components';

const fakeResults = {
  0 : {
    mode: 'Bike',
    direction: 'to corner of path and Lloyd Center/ NE 11th Ave',
    time: '4 minutes',
    id: 0
  },
  1 : {
    mode: 'Walk',
    direction: 'to Lloyd Center/ NE 11th Ave MAX Station',
    time: '1 minute',
    id: 1
  },
  2 : {
    mode: 'Rail',
    direction: 'MAX Blue Line to Gresham',
    time: '35 minutes',
    id: 2
  },
  3 : {
    mode: 'Walk',
    direction: 'to Gresham Transit Center',
    time: '2 minutes',
    id: 3
  },
  4 : {
    mode: 'Bus',
    direction: '80-Kane/Troutdate Rd to Glen Otto Park',
    time: '22 minutes',
    id: 4
  },
  5 : {
    mode: 'Bike',
    direction: 'to 1208 E Historic Columbia River',
    time: '1 minute',
    id: 5
  } 
};

const ResultListStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

function ResultList(){
  return (
    <ResultListStyles>
      <h3>Results:</h3>
      {Object.keys(fakeResults).map(function(resultId){
        const result = fakeResults[resultId];
        return <Result
          mode={result.mode}
          direction={result.direction}
          time={result.time}
          key={result.id} />;
      })}
    </ResultListStyles>
  );
}

export default ResultList;