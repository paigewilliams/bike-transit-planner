import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSearchParams, processUserInputForAPICall } from './../actions';

const FormStyles = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 95%;
`;
const StyledSelect = styled.select`
  font-size: 16px;

`;
const StyledTime = styled.input`
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

function RouteForm({ dispatch, toggleForm }) {

  let _toPlace = null;
  let _fromPlace = null;
  let _departOrArrive = null;
  let _date = null;
  let _distance = null;
  let _time = null;

  return (
    <FormStyles>
      <h3>Plan a route:</h3>
      <form onSubmit={e => {
        e.preventDefault();
        const input = {
          toPlace: _toPlace.value,
          fromPlace: _fromPlace.value,
          departOrArrive: _departOrArrive.value,
          date: _date.value,
          distance: _distance.value,
          time: _time.value
        };
        dispatch(addSearchParams(input));
        processUserInputForAPICall(input, dispatch);
        toggleForm(true);
        _toPlace = '';
        _fromPlace = '';
        _date = '';
        _distance = '';
        _time = '';
      }}>
        <StyledInput
          type='text'
          id='start'
          placeholder='Start address'
          ref={(input) => { _toPlace = input; }} />
        <br />
        <StyledInput
          type='text'
          id='end'
          placeholder='Destination address'
          ref={(input) => { _fromPlace = input; }} />
        <br />
        <TimeLine>
          <StyledSelect ref={(option) => { _departOrArrive = option; }}>
            <option value="false">Depart</option>
            <option value="true">Arrive</option>
          </StyledSelect>
          <StyledText>by</StyledText>
          <StyledTime
            type='time'
            id='time'
            placeholder='9:00'
            ref={(input) => { _time = input; }} />
          <StyledText>on</StyledText>
        </TimeLine>
        <TimeLine>
          <StyledInput
            type='date'
            id='date'
            ref={(input) => { _date = input; }} />
        </TimeLine>
        <StyledInput
          type='number'
          id='miles'
          placeholder='Maximum miles biked'
          ref={(input) => { _distance = input; }} />
        <br />
        <button type='submit'>Find Route</button>
      </form>
    </FormStyles>
  );
}



RouteForm.propTypes = {
  dispatch: PropTypes.func,
  toggleForm: PropTypes.func
};

export default connect()(RouteForm);
