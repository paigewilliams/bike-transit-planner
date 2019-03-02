import React from 'react';
import styled from 'styled-components';
import Map from './Map';
import Header from './Header';
import Sidebar from './Sidebar';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

function App() {
  return(
    <div>
      <Title>App works!</Title>
      <Header />
      <Sidebar />
      <Map />
    </div>
  );
}

export default App