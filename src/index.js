import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalProvider } from './context/context';

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById('root')
);

reportWebVitals();
