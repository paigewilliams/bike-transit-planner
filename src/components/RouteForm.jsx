import React from 'react';
import TimeField from 'react-simple-timefield';

function RouteForm(){
  let _startAddress = null;
  let _endAddress = null;
  let _departOrArrive = null;
  let _date = null;
  let _miles = null;
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
          <select ref={(option)=> {_departOrArrive = option}}>
            <option value="depart">Depart</option>
            <option value ="arrive">Arrive</option>
          </select>
          <p>by</p>
          <TimeField />
          <input
            type='date'
            id='date'
            ref={(input)=> {_date = input}}/>
           <input 
            type='number'
            id='miles'
            placeholder='Maximum miles biked'
            ref={(input)=> {_miles = input}}/> 
       <button type='submit'>Find Route</button>

      </form>
    </div>
  )
}

export default RouteForm;