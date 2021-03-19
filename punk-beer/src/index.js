import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from "redux-thunk";


import './index.css';

import App from './App';
import {beersReducer, singleReducer} from './store'

const store = createStore(combineReducers({
  beers: beersReducer,
  single: singleReducer
}), applyMiddleware(thunk, logger))
//  console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
