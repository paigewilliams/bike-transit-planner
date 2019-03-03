import React from 'react';
import styled from 'styled-components';
import BikeSVG from './BikeSVG';

const HeaderStyle = styled.header`
  grid-column: 1 / span 2;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1rem;
  margin-right: 1rem;
  f
`;


function Header(){
  return(
    <HeaderStyle>
      <h1>Transit & Bike Trip Planner</h1>
      <BikeSVG />
      <button>Sign In</button>
    </HeaderStyle>
  );
}

export default Header;