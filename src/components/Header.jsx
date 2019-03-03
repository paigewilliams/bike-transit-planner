import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  grid-column: 1 / span 2;
  background-color: #F6F6F4;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const Button = styled.button`
  background-color: palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

function Header(){
  return(
    <HeaderStyle>
      <h1>Transit & Bike</h1>
      <Button>Sign In</Button>
    </HeaderStyle>
  );
}

export default Header;