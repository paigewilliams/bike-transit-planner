import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  grid-column: 1 / span 2;
  background-color: #F2B661;
  display: flex;
  align-items: center;
  justify-content: center;
`

function Header(){
  return(
    <HeaderStyle>
      <h1>Header works</h1>
    </HeaderStyle>
  )
}

export default Header;