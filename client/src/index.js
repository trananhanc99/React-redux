import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// core components
import Manin from "layout"
import myReducers from "reducers"

// Router
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
    myReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  
  const hist = createBrowserHistory();


ReactDOM.render(
    <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/admin" component={Manin} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </Router>
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
