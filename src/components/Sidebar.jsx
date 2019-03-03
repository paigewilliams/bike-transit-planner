import React from 'react';
import RouteForm from './RouteForm';
import styled from 'styled-components';
import ResultList from './ResultList';

const SidebarStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  overflow-y: scroll;
  postion: fixed;
`;


function Sidebar(){
  return(
    <SidebarStyles>
      <RouteForm />
      <ResultList />
    </SidebarStyles>
  );
}

export default Sidebar;