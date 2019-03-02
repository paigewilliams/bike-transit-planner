import React from 'react';
import Result from './Result';

const fakeResults = {
  0 : {
    mode: 'Bike',
    direction: 'to corner of path and Lloyd Center/ NE 11th Ave',
    time: '4 minutes'
  },
  1 : {
    mode: 'Walk',
    direction: 'to Lloyd Center/ NE 11th Ave MAX Station',
    time: '1 minute'
  },
  2 : {
    mode: 'Rail',
    direction: 'MAX Blue Line to Gresham',
    time: '35 minutes'
  },
  3 : {
    mode: 'Walk',
    direction: 'to Gresham Transit Center',
    time: '2 minutes'
  },
  4 : {
    mode: 'Bus',
    direction: '80-Kane/Troutdate Rd to Glen Otto Park',
    time: '22 minutes'
  },
  5 : {
    mode: 'Bike',
    direction: 'to 1208 E Historic Columbia River',
    time: '1 minute'
  } 
}

function ResultList(){
  return (
    <div>
      <h3>Results:</h3>
    </div>
  )
}

export default ResultList;