import React from 'react';
import RouteForm from './RouteForm';
import styled from 'styled-components';

const SidebarStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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