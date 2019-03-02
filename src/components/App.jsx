import React from 'react';
import Map from './Map';
import Header from './Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-rows: 15% auto;
  grid-template-columns: 33% auto;
  grid-gap: 1rem;
  grid-template-areas: 
    "header"
    "sidebar"
    "map"
`

function App() {
  return(
    <Container>
      <Header />
      <Sidebar />
      <Map />
    </Container>
  );
}

export default App