import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import todoApp from './reducers';
import './index.css';

const store = createstore(todoApp);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
