import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';


const render = (Component) => {
  ReactDOM.render(
    <Provider >
      <Component/>
    </Provider>,
    document.getElementById('react-app-root')
  );
};

render(App);
/*eslint-disable*/
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
};
/*eslint-enable*/