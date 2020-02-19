import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import MainAppContainer from './components/MainAppContainer';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import 'babel-polyfill'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

import 'bootstrap/dist/css/bootstrap.min.css';

const loggerMiddleware = createLogger()

const store = createStore(rootReducer,
  {},
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ))

ReactDOM.render(
  <Provider store={store}>
    <MainAppContainer />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
