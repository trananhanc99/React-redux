import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

// Import router

import routes from "routes.js";




const switchRoutes = (
    <Switch>
      {routes.map((prop, key) => {
        if (prop.layout === "/admin") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        }
        return null;
      })}
      <Redirect from="/admin" to="/admin/dashboard" />
    </Switch>
  );


import React from 'react'

const index = () => {
    return (
        <div>
            {/* Write Compoment in here */}
        </div>
    )
}

export default index
