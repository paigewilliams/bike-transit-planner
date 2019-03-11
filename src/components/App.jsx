import React from 'react';
import Map from './Map';
import Header from './Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import MapData from './MapData';

const Container = styled.div`
  display: grid;
  grid-template-rows: 5vw 50vw;
  grid-template-columns: 25% 75%;

`;

function App() {
  return(
    <Container>
      <GlobalStyle />
      <Header />
      <Sidebar />
      <Map />
      <MapData />
    </Container>
  );
}

export default App;
