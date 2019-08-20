import React from "react";
import ReactDOM from "react-dom";

// Router
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import myReducer from "reducers/index.js";
import Admin from "layouts/Admin.jsx";
import "assets/css/material-dashboard-react.css?v=1.7.0";
const store = createStore(
  myReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// core components

const hist = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
