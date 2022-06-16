import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import App from './components/App';
import createdStore from './store/store';

import './index.css';

const store = createdStore;

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);