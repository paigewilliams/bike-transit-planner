import React from 'react';
import styled from 'styled-components';
import BikeSVG from './BikeSVG';

const HeaderStyle = styled.header`
  grid-column: 1 / span 2;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333333;
  border-bottom: 1px solid #333333;
  color: white;
  left: 0;
`;

const HeaderText = styled.h1`
  margin-left: 1rem;
`
const HeaderButton = styled.button`
  margin-right: 1rem;
`

function Header(){
  return(
    <HeaderStyle>
      <HeaderText>Transit & Bike Trip Planner</HeaderText>
      <BikeSVG />
      <HeaderButton>Sign In</HeaderButton>
    </HeaderStyle>
  );
}

export default Header;