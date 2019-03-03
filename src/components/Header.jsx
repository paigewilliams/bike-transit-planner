import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  grid-column: 1 / span 2;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1rem;
  margin-right: 1rem;
`;


function Header(){
  return(
    <HeaderStyle>
      <h1>Transit & Bike Trip Planner</h1>
      <button>Sign In</button>
    </HeaderStyle>
  );
}

export default Header;