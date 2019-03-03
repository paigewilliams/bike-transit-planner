import React from 'react';
import styled from 'styled-components'


function Result(props){
  return (
    <div>
      <p>{props.mode} to {props.direction}</p>
      <p>Time: {props.time}</p>
    </div>
  );
}

export default Result;