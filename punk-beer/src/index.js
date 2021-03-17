import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from "redux-thunk";

import './index.css';

import App from './App';
import {reducer} from './store'

const store = createStore(reducer, applyMiddleware(thunk,logger))
// console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
