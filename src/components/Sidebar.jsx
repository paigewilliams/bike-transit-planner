import React, { useState } from 'react';
import styled from 'styled-components';
import RouteForm from './RouteForm';
import ResultList from './ResultList';


const SidebarStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 0.5rem;
  background-color: white;
  overflow-y: scroll;
  postion: fixed;
`;

const Sidebar = () => {
  const [results, setResults] = useState(false);
  const toggleForm = (bool) => setResults(bool);

  return (
    <SidebarStyles>
      {results ? <ResultList toggleForm={toggleForm} /> : <RouteForm toggleForm={toggleForm} />}
    </SidebarStyles>
  );
};

export default Sidebar;
