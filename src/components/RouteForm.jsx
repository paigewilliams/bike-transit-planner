import React from 'react';
import TimeField from 'react-simple-timefield';
import { Formkik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

const FormStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7rem;
`;

const TimeLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function RouteForm(){
  let _startAddress = null;
  let _endAddress = null;
  let _departOrArrive = null;
  let _date = null;
  let _miles = null;
  return(
    <FormStyles>
      <h3>Plan a route:</h3>
      <form>
        <input
          type='text'
          id='start'
          placeholder='Start Address'
          ref={(input)=> {_startAddress = input;}}/>
        <br/>
        <input
          type='text'
          id='end'
          placeholder='Destination Address'
          ref={(input)=> {_endAddress = input;}}/>
        <br/>
        <TimeLine>
          <select ref={(option)=> {_departOrArrive = option;}}>
            <option value="depart">Depart</option>
            <option value ="arrive">Arrive</option>
          </select>
          <p>by</p>
          <TimeField />
          <input
            type='date'
            id='date'
            ref={(input)=> {_date = input;}}/>
        </TimeLine> 
        <br />
        <input 
          type='number'
          id='miles'
          placeholder='Maximum miles biked'
          ref={(input)=> {_miles = input;}}/> 
        <br /> 
        <button type='submit'>Find Route</button>

      </form>
    </FormStyles>
  );
}

export default RouteForm;