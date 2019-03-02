import React from 'react';
import RouteForm from './RouteForm';
import styled from 'styled-components';

const SidebarStyles = styled.div`
  height: 100%;
  width: 10rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: papayawhip;
  overflow-x: hidden;
  padding-top: 20px;
`


function Sidebar(){
  return(
    <SidebarStyles>
      <h1>Sidebar works</h1>
      <RouteForm />
    </SidebarStyles>
  )
}

export default Sidebar;