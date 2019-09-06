import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
//Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Import CSS Global
import "assets/css/global.css";
import "assets/css/themifyicons.css";
import thunk from 'redux-thunk';

// core components
import Manin from "layout";
import myReducers from "reducers";
import { fetchAllPosts } from "actions/index";

// Router
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// Redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
const middleware = [thunk];
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);
const store = createStore(
    myReducers, enhancer
  );
store.dispatch(fetchAllPosts());
const hist = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
      <Router history={hist}>
        <Switch>
          <Route path={hist.location.pahname} component={Manin} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
