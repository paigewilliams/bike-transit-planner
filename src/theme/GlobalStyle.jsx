import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,800i');
    font-family: 'Nunito', sans-serif;
  };

  button {
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,800i');
    font-family: 'Nunito', sans-serif;
  }

  input {
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,800i');
    font-family: 'Nunito', sans-serif;
  }

  select {
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,800i');
    font-family: 'Nunito', sans-serif;
  }
`;

export default GlobalStyle;