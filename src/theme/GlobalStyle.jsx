import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,800');
    font-family: 'Nunito', sans-serif;
  };

  header {
    font-weight: 800;
  }

  button {
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,800');
    font-family: 'Nunito', sans-serif;
    text-align: center;
    text-transform: uppercase;
    color: white;
    border-radius: 3px;
    border: tomato;
    transition: 0.5s;
    padding: 0.25em 1em;
    font-size: 1em;
    background-color: tomato;
  }

  input {
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,800');
    font-family: 'Nunito', sans-serif;
  }

  select {
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,800');
    font-family: 'Nunito', sans-serif;
  }
`;

export default GlobalStyle;