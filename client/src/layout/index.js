import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from 'reactstrap';
// Import Logo
import Logo from "assets/img/logo.png"
// Import router
import routes from "router";
// Import Component
import NavabarTop from "components/Navabar_Top"

const switchRoutes =routes.map((prop, key) => {
        return (
          <Switch key={key}>
            <Route path={prop.path} component={prop.component} key={key}/>
          </Switch>
        )
    }
);
const index = () => {
    return (
        <Container>
            {/* MenuTop */}
            <NavabarTop
              logo={Logo}
            />
            {switchRoutes}

        </Container>
    )
}

export default index
