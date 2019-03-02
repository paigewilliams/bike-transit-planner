import React from 'react';
import RouteForm from './RouteForm';
import styled from 'styled-components';

const SidebarStyles = styled.div`

  background-color: papayawhip;

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