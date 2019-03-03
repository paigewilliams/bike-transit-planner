import React from 'react';
import TimeField from 'react-simple-timefield';
import { Formkik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

const FormStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20rem;
`;

const TimeLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 3px solid tomato;
  background: transparent;
  font-size: 18px;
  margin-bottom: 2rem;
  width: 15rem;
`;
const StyledSelect = styled.select`
  font-size: 16px;
  
`;
const StyledTime = styled(TimeField)`
  border: none;
  border-bottom: 3px solid tomato;
  background: transparent;
  font-size: 13px;
  width: 100px;

`;
const StyledText = styled.p`
  font-size: 18px;
  margin-right: 1rem;
  margin-left 1rem;
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
        <StyledInput
          type='text'
          id='start'
          placeholder='Start address'
          ref={(input)=> {_startAddress = input;}}/>
        <br/>
        <StyledInput
          type='text'
          id='end'
          placeholder='Destination address'
          ref={(input)=> {_endAddress = input;}}/>
        <br/>
        <TimeLine>
          <StyledSelect ref={(option)=> {_departOrArrive = option;}}>
            <option value="depart">Depart</option>
            <option value ="arrive">Arrive</option>
          </StyledSelect>
          <StyledText>by</StyledText>
          <StyledTime />
          <StyledText>on</StyledText>
        </TimeLine> 
        <TimeLine>
          <StyledInput
            type='date'
            id='date'
            ref={(input)=> {_date = input;}}/>
        </TimeLine>
        <StyledInput 
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