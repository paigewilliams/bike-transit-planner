import React from 'react';
import RouteForm from './RouteForm';
import styled from 'styled-components';

const SidebarStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: papayawhip;
`


function Sidebar(){
  return(
    <SidebarStyles>
      <RouteForm />
    </SidebarStyles>
  )
}

export default Sidebar;