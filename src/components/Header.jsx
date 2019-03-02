import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  display: block;
  color: white;
  background: tomato;
  text-transform: uppercase;
  z-index: 1;
`

function Header(){
  return(
    <HeaderStyle>
      <h1>Header works</h1>
    </HeaderStyle>
  )
}

export default Header;