import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito:200,400,800');
  body {
    font-family: 'Nunito', sans-serif;
    margin: 0;
    height: 100%;
  };

  header {
    font-weight: 800;
  }

  button {
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
    font-family: 'Nunito', sans-serif;
    font-weight: 200;
    color: #333333;
  }

  select {
    font-family: 'Nunito', sans-serif;
  }

  *:focus {
    outline: none;
  }
`;

export default GlobalStyle;