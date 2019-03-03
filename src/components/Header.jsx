import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  grid-column: 1 / span 2;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const Button = styled.button`
  text-align: center;
  text-transform: uppercase;
  color: white;
  border-radius: 3px;
  transition: 0.5s;
  padding: 0.25em 1em;
  font-size: 1em;
  margin: 1em;
  background-color: tomato;
  }
`

function Header(){
  return(
    <HeaderStyle>
      <h1>Transit & Bike Trip Planner</h1>
      <Button>Sign In</Button>
    </HeaderStyle>
  );
}

export default Header;