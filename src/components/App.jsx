import React from 'react';
import Map from './Map';
import Header from './Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';


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
    </Container>
  );
}

export default App;
