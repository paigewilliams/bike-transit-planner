import React from 'react';
import styled from 'styled-components';
import Map from './Map';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return(
    <div>
      <Header />
      <Sidebar />
      <Map />
    </div>
  );
}

export default App