import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { fetchAllPosts } from 'actions'
//Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Import CSS Global
import "assets/css/global.css";
import "assets/css/themifyicons.css";
// core components
import Main from "layout";
// Router
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
// Redux store
import { Provider } from "react-redux";
import configureStore from 'store/store.js'
const store = configureStore();
store.dispatch(fetchAllPosts());
const hist = createBrowserHistory();
ReactDOM.render(
    <Provider store={store}>
      <Router history={hist}>
        <Main/>
      </Router>
    </Provider>, 
  document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
