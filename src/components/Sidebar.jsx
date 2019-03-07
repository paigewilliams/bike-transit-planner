import React from 'react';
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


class Sidebar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      resultsVisible: false
    };
    this.handleHideForm = this.handleHideForm.bind(this);
  }

  handleHideForm(){
    this.setState({resultsVisible: true});
  }

  render() {
    let visibleContent = null;
    if(this.state.resultsVisible){
      visibleContent = <ResultList />;
    } else {
      visibleContent = <RouteForm onFormSubmission={this.handleHideForm}/>;
    }
    return(
      <SidebarStyles>
        {visibleContent}
      </SidebarStyles>
    );
  }

}

export default Sidebar;
