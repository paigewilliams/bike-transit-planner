import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Time = styled.p`
  font-size: 12px;
  margin-top: -0.75rem;
  color: tomato;
`;
function Result(props){
  console.log(props);
  return (
    <div>
      <p>{props.mode} to {props.direction}</p>
      <Time>Time: {props.time}</Time>
    </div>
  );
}

Result.propTypes = {
  mode: PropTypes.string,
  direction: PropTypes.string,
  time: PropTypes.string
};

export default Result;
