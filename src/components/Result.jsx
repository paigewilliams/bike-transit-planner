import React from 'react';

function Result(props){
  return (
    <div>
      <p>{props.mode} to {props.direction}</p>
      <p>Time: {props.time}</p>
    </div>
  )
}

export default Result;