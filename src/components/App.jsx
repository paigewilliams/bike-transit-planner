import React from 'react';
import Map from './Map';
import Header from './Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-rows: 7vw 43vw;
  grid-template-columns: 25% 75%;

`;

function App() {
  return(
    <Container>
      <Header />
      <Sidebar />
      <Map />
    </Container>
  );
}

export default App;