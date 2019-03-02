import React from 'react';

function RouteForm(){
  let _startAddress = null;
  let _endAddress = null;

  return(
    <div>
      <form>
        <input
          type='text'
          id='start'
          placeholder='Start Address'
          ref={(input)=> {_startAddress = input}}/>
        <input
          type='text'
          id='end'
          placeholder='Destination Address'
          ref={(input)=> {_endAddress = input}}/>
       <button type='submit'>Find Route</button>

      </form>
    </div>
  )
}

export default RouteForm;