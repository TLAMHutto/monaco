import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../public/styles/editor.css'; // Import your CSS here


if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}

ReactDOM.render(<App />, document.getElementById('root'));
