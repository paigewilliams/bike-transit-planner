import React from 'react';
import Map from './Map';
import Header from './Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,800i');
    font-family: 'Nunito', sans-serif;
  };
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 7vw 43vw;
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