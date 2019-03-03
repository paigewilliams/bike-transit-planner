import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  grid-column: 1 / span 2;
  background-color: white;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const Button = styled.button`
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 3px;
  padding: 0.25em 1em;
  font-size: 1em;
  margin: 1em;
  background-image: linear-gradient(90deg, rgba(217,16,16,1) 0%, rgba(224,21,224,1) 100%);
  
  &:hover {
    background-position: right center;
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