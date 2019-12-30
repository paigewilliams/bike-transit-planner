import React, { useState } from 'react';
import RouteForm from './RouteForm';
import styled from 'styled-components';
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

  const handleHideForm = () => setResults(true);

  return (
    <SidebarStyles>
      {results ? <ResultList /> : <RouteForm onFormSubmission={handleHideForm} />}
    </SidebarStyles>
  );

};

export default Sidebar;
