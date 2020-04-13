import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from 'reactstrap';
// Import Logo
import Logo from "assets/img/logo.png"
// Import router
import routes from "router";
// Import Component
import NavbarTop from "components/Navabar_Top"

const switchRoutes =routes.map((prop, key) => {
  // console.log(prop.path, prop.component)
        return (
          <Switch key={key}>
            <Route path={prop.path} component={prop.component} key={key}/>
          </Switch>
        )
    }
);
const Index = () => {
    return (
        <Container>
            <NavbarTop
              logo={Logo}
            />
            {switchRoutes}
        </Container>
    )
}

export default Index
